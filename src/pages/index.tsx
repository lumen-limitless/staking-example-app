import React, { useMemo, useState } from 'react'
import { parseUnits, commify } from '@ethersproject/units'
import { formatBalance, parseBalance } from '../functions'
import {
  useCalls,
  useContractFunction,
  useEthers,
  useTokenAllowance,
  useTokenBalance,
} from '@usedapp/core'
import { BigNumber, ethers } from 'ethers'
import { NextPage } from 'next'
import Card from '../components/ui/Card'
import Button from '../components/ui/Button'
import Skeleton from '../components/ui/Skeleton'
import Section from '../components/ui/Section'
import Container from '../components/ui/Container'
import TransactionButton from '../components/ui/TransactionButton'
import Grid from '../components/ui/Grid'
import Toggle from '../components/ui/Toggle'
import { useBoolean } from 'react-use'
import dynamic from 'next/dynamic'
import {
  useStakingCalls,
  useStakingContract,
  useTokenContract,
  useUI,
} from '../hooks'
import Spinner from '../components/ui/Spinner'
import { CHAINID } from '../constants'
import { NextSeo } from 'next-seo'
import { signERC2612Permit } from 'eth-permit'
import Connect from '../components/modals/Connect'

const StakePage: NextPage = () => {
  const { setModalView } = useUI()
  const staking = useStakingContract()
  const stakingToken = useTokenContract()

  const { library, account, chainId, switchNetwork } = useEthers()

  const [amount, setAmount] = useState<string>('')
  const [permit, setPermit] = useState<{
    v: number
    r: string
    s: string
  } | null>(null)
  const [isWithdrawing, toggle] = useBoolean(false)
  const tokenBalance = useTokenBalance(stakingToken.address, account)
  const allowance = useTokenAllowance(
    stakingToken.address,
    account,
    staking.address
  )

  const approve = useContractFunction(stakingToken, 'approve', {
    transactionName: 'Approve',
  })
  const stake = useContractFunction(staking, 'stake', {
    transactionName: 'Stake',
  })

  const stakeWithPermit = useContractFunction(staking, 'stakeWithPermit', {
    transactionName: 'Stake',
  })

  const withdraw = useContractFunction(staking, 'withdraw', {
    transactionName: 'Withdraw',
  })
  const getReward = useContractFunction(staking, 'getReward', {
    transactionName: 'Get Reward',
  })
  const exit = useContractFunction(staking, 'exit', { transactionName: 'Exit' })

  const [balanceOf, totalSupply, rewardRate, earned, paused] = useStakingCalls()

  const apr = useMemo(() => {
    if (!rewardRate) return null
    if (!totalSupply) return null
    const r = (rewardRate as BigNumber).toNumber()
    const t = parseBalance(totalSupply) as number
    return `${commify((((r * 31557600) / t) * 100).toFixed(2))}%`
  }, [rewardRate, totalSupply])

  const handleAmountInput = (input: string) => {
    Number.isNaN(parseFloat(input)) ? setAmount('') : setAmount(input)
  }

  const handlePermit = async () => {
    if (!library) {
      console.error('no window.ethereum found')
    }
    if (!account) {
      console.error('no account found')
      return
    }

    const result = await signERC2612Permit(
      library,
      {
        verifyingContract: stakingToken.address,
        version: '1',
        chainId: CHAINID,
        name: 'Steak Token',
      },
      account,
      staking.address,
      ethers.constants.MaxUint256.toString()
    )
    console.log(result)
    const { v, r, s } = result

    setPermit({ v, r, s })
  }
  return (
    <>
      <NextSeo />

      <Section layout="start" padding="md">
        <Container className="max-w-7xl">
          <Grid gap="md">
            <Card className="col-span-12 md:col-span-6">
              <Card.Body>
                <h2>APR</h2>
                <p>{apr || <Spinner />}</p>
              </Card.Body>
            </Card>

            <Card className="col-span-12 md:col-span-6">
              <Card.Body>
                <h2>Total Staked</h2>
                {totalSupply ? (
                  commify(formatBalance(totalSupply) || '')
                ) : (
                  <Spinner />
                )}
              </Card.Body>
            </Card>

            <Card className="col-span-12">
              <Card.Header>
                <div className="flex items-center  gap-3 p-3">
                  <Toggle
                    className="absolute top-3 right-3"
                    iconSet={{
                      on: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M1 3.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5zM8 6a.5.5 0 0 1 .5.5v5.793l2.146-2.147a.5.5 0 0 1 .708.708l-3 3a.5.5 0 0 1-.708 0l-3-3a.5.5 0 0 1 .708-.708L7.5 12.293V6.5A.5.5 0 0 1 8 6z"
                          />
                        </svg>
                      ),
                      off: (
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width={16}
                          height={16}
                          preserveAspectRatio="xMidYMid meet"
                          viewBox="0 0 16 16"
                        >
                          <path
                            fill="currentColor"
                            fillRule="evenodd"
                            d="M8 10a.5.5 0 0 0 .5-.5V3.707l2.146 2.147a.5.5 0 0 0 .708-.708l-3-3a.5.5 0 0 0-.708 0l-3 3a.5.5 0 1 0 .708.708L7.5 3.707V9.5a.5.5 0 0 0 .5.5zm-7 2.5a.5.5 0 0 1 .5-.5h13a.5.5 0 0 1 0 1h-13a.5.5 0 0 1-.5-.5z"
                          />
                        </svg>
                      ),
                    }}
                    onToggle={() => toggle()}
                    isActive={isWithdrawing}
                  />
                  <h1>{`${isWithdrawing ? 'Withdraw' : 'Stake'}`}</h1>
                </div>
              </Card.Header>
              <Card.Body>
                {!account ? (
                  <>
                    <div className="flex place-content-center">
                      <Button
                        size="md"
                        color="blue"
                        className=" max-w-sm"
                        onClick={() => setModalView(<Connect />)}
                      >
                        Connect Wallet
                      </Button>
                    </div>
                  </>
                ) : chainId !== CHAINID ? (
                  <div className="flex place-content-center">
                    <Button
                      color="blue"
                      size="md"
                      className="max-w-sm"
                      onClick={() => switchNetwork(CHAINID)}
                    >
                      Switch to Goerli
                    </Button>
                  </div>
                ) : !allowance ? (
                  <Spinner />
                ) : paused === true ? (
                  <>
                    <Spinner />
                  </>
                ) : (
                  <>
                    {allowance && !permit && parseBalance(allowance) === 0 ? (
                      <div className="flex flex-col place-content-center">
                        <Button
                          color="green"
                          size="md"
                          className="mx-auto max-w-md"
                          onClick={handlePermit}
                        >
                          Permit Deposits
                        </Button>
                        <TransactionButton
                          method={approve}
                          name="Enable Deposits Manually"
                          args={[staking.address, ethers.constants.MaxUint256]}
                        />
                      </div>
                    ) : (
                      <>
                        <div className="mr-3 flex flex-col gap-3 md:mr-9 md:flex-row">
                          <div className="relative w-full  ">
                            <input
                              className="w-full rounded p-3 text-sm text-black "
                              type="number"
                              value={amount}
                              placeholder="0.0"
                              onChange={(e) =>
                                handleAmountInput(e.target.value)
                              }
                              max={
                                isWithdrawing
                                  ? formatBalance(balanceOf) || '0'
                                  : formatBalance(tokenBalance || '0') || '0'
                              }
                            />
                            <button
                              className="absolute right-9 top-0 bottom-0 p-1 text-black"
                              onClick={() => {
                                setAmount(
                                  isWithdrawing
                                    ? formatBalance(balanceOf) || ''
                                    : formatBalance(tokenBalance || '0') || ''
                                )
                              }}
                            >
                              MAX
                            </button>
                          </div>

                          <div className="flex w-full gap-3">
                            {isWithdrawing ? (
                              <TransactionButton
                                color="blue"
                                className="mx-auto max-w-xs md:mx-0"
                                requirement={{
                                  requirement:
                                    amount !== '' &&
                                    parseFloat(amount) <=
                                      (parseBalance(balanceOf) || 0),
                                  message: 'Invalid amount',
                                }}
                                method={withdraw}
                                args={[
                                  amount === ''
                                    ? ethers.constants.Zero
                                    : parseUnits(amount),
                                ]}
                                name="Withdraw"
                              />
                            ) : (
                              <TransactionButton
                                color="blue"
                                className=" mx-auto max-w-xs md:mx-0 "
                                requirement={{
                                  requirement:
                                    amount !== '' &&
                                    parseFloat(amount) <=
                                      (parseBalance(tokenBalance || '0') || 0),
                                  message: 'Invalid amount',
                                }}
                                method={
                                  permit && parseBalance(allowance) === 0
                                    ? stakeWithPermit
                                    : stake
                                }
                                args={
                                  permit && parseBalance(allowance) === 0
                                    ? [
                                        parseUnits(amount || '0'),
                                        permit.v,
                                        permit.r,
                                        permit.s,
                                      ]
                                    : [parseUnits(amount || '0')]
                                }
                                name="Stake"
                              />
                            )}
                          </div>
                        </div>
                        <ul className="my-6 max-w-sm space-y-2 rounded p-3 ">
                          <li className="flex">
                            Balance:{' '}
                            {tokenBalance ? (
                              `${commify(formatBalance(tokenBalance) || '0')} `
                            ) : (
                              <Skeleton />
                            )}{' '}
                          </li>

                          <li className="flex ">
                            Staked:{' '}
                            {balanceOf ? (
                              `${commify(formatBalance(balanceOf) || '0')} `
                            ) : (
                              <Skeleton />
                            )}
                          </li>

                          <li className="flex ">
                            Earnings:{' '}
                            {earned ? (
                              ` ${commify(formatBalance(earned) || '0')} `
                            ) : (
                              <Skeleton />
                            )}
                          </li>
                        </ul>
                        <div className="flex w-full flex-col  items-center justify-center gap-3 lg:flex-row">
                          <TransactionButton
                            color="green"
                            requirement={{
                              requirement: (parseBalance(earned) || 0) > 0,
                            }}
                            method={getReward}
                            name="Collect Earnings"
                          />

                          <TransactionButton
                            color="red"
                            requirement={{
                              requirement: (parseBalance(balanceOf) || 0) > 0,
                            }}
                            method={exit}
                            name="Exit Staking"
                          />
                        </div>
                      </>
                    )}
                  </>
                )}
              </Card.Body>
            </Card>
          </Grid>
        </Container>
      </Section>
    </>
  )
}

export default StakePage
