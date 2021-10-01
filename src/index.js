import Common, { Chain, Hardfork } from '@ethereumjs/common'
import { FeeMarketEIP1559Transaction } from '@ethereumjs/tx'

const common = new Common({ chain: Chain.Mainnet, hardfork: Hardfork.London })

const txData = {
  "data": "0xdccad524005f4a2f15f455548e630c03da45f6aa6a2a5c593421f07ff844a530f42346cf02ce625e94458d39dd0bf3b45a843544dd4a14b8169045a3a3d15aa564b936c50000000000000000000000000000000000000000000000000000000027ae9b32000000000000000000000000000000000000000000000000000000174876e800000000000000000000000000dac17f958d2ee523a2206206994597c13d831ec70000000000000000000000000000000000000000000000000000000000000001",
  "gasLimit": "0x2967b",
  "maxPriorityFeePerGas": 3173566518.0496095,
  "maxFeePerGas": 3173566518.0496095,
  "nonce": "0x5c2",
  "to": "0xed9d63a96c27f87b07115b56b2e3572827f21646",
  "value": "0",
  "chainId": "0x01",
  "accessList": [],
  "type": "0x02"
}

const tx = FeeMarketEIP1559Transaction.fromTxData(txData, { common })

console.log(tx.maxFeePerGas.toString('hex'))