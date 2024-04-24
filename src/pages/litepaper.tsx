import rehypePrism from '@mapbox/rehype-prism';
import { data } from 'autoprefixer';
import PlainDisplayLayout from '../layouts/PlainDisplayLayout';
import { ExtendedNextPage } from '../lib/types/ExtendedNextPage';
import { GetStaticProps } from 'next';
import { MDXRemote } from 'next-mdx-remote';
import type { MDXRemoteSerializeResult } from 'next-mdx-remote/dist/types';
import { serialize } from 'next-mdx-remote/serialize';
import rehypeKatex from 'rehype-katex';
import remarkMath from 'remark-math';
import React from 'react';
import ScrollingToCLink from '../components/UI/ScrollingToCLink';

const litepaperContent = `
## Abstract

In this paper we introduce Warlock, an omni-chain oracle and vertically integrated liquidation engine designed to enhance DeFi safety and profitability by recapturing oracle extractable value (OEV). 

This system ensures that the value traditionally captured by block producers is redirected back to key DeFi stakeholders more equitably through the realignment of otherwise adversarial incentives. In doing so Warlock significantly reduces value leakage and enhances the ecosystem's overall efficiency.


## Introduction

Collateral-based systems in DeFi rely on liquidations to maintain system solvency and user position health. These liquidations occur primarily when oracles push price updates and bring external price discovery to their on-chain feed. The value extracted through oracle triggered liquidations is a large percentage of total miner extractible value (MEV) today.

Since the genesis of DeFi, liquidations (more broadly the downstream effects of oracle updates) have been at the root of nearly one billion dollars of value leaked from protocols to validators, amounting to roughly \$250m per annum. A small portion of this value is captured by searchers, the on-chain actors performing the liquidations, while the overwhelmingly majority has passed to validators, the parties responsible for producing blocks. Very little of the value extracted has passed back to the protocols and end users responsible for creating the order flow.

The profit from these liquidations can and should be returned to the protocols and users generating it. Warlock introduces a novel oracle alongside an integrated liquidation system that significantly enhances the safety and profitability of collateral-based systems — recapturing OEV leakage in order to return value to stakeholders.

With this paradigm shift among all key stakeholders, our goal is to disinter-mediate liquidation processes, increasing the efficiency of liquidations and enshrining an equitable profit distribution between end-users, protocols, searchers and validators.

## Motivation

In the era of Flashbots and no/low cost flash loans, liquidations are a free-market for all participants no matter their size or speed. In such a free-market, one would generally assume that over time inefficiencies would have been hammered out through fierce competition, however whilst liquidations have become more efficient over time, significant structural inefficiencies persist within current protocol-enforced liquidation systems. 

Further, the present market structure leaks all value captured during liquidations to searchers and validators, with none returned to protocols and the end users who are affected by liquidations.

Through retroactive liquidation analysis, we have identified and characterized nearly \$1B of cumulative value leaked, with none of the present systems allocating value to the key stakeholders -- protocols and their users. 

### Value Distribution Inequity

The current paradigm leaves OEV on the table to be fought over by searchers with validators being the ultimate beneficiary.

More specifically, as price updates are pushed, OEV opportunities are triggered across lending and derivatives markets as user positions become insolvent. Searchers identify these price updates and participate in various auction processes in order to secure inclusion in the same block as the price update itself — whether via a priority gas auction (PGA) in the mempool or off chain via a Flashbots or similar auction.

This results in a value distribution which enshrines block producers as the key beneficiaries of OEV, while searchers benefit to the extent that competition allows, with protocols and end users receiving no value at all.

Some lending markets attempt to recapture value through internal auction processes with varying degrees of success. Our data unfortunately indicates that these auctions have restricted participation and increased liquidation latency in most cases – in effect increasing risks of insolvency and limiting the degree of leverage that the lending market can provide, while also resulting in a lower degree of value recapture.

More formally, given the total notional liquidation value $L$ - driven by oracle updates, the cost of capital $C$ for solvers, the risk premium $R$ for solvers to hedge inventory risk, the auction mechanism costs $A$ (bid shading, entry efforts, etc.), the liquidation penalty percentage $\lambda$, the liquidation penalty $\lambda$  $L$ paid to market participants to service the liquidation, we can find $O_{n}$ - the oracle ex-tractable value which can be returned to market participants servicing the liquidation.

We can then slice out the value captured by stakeholders into:

- $V_S$: Value captured by searchers.
- $V_{LP}$: Value captured by liquidity providers a.k.a market makers.
- $V_B$: Value captured by block builders.
- $V_P$: Value captured by block proposers.
- $V_V$: Value captured by L1 validators.
- $V_{SE}$: Value captured by L2 sequencers.
- $V_{OP}$: Value returned to the originating protocol.
- $V_U$: Value returned to the end users.


The Warlock Protocol aims to optimize the liquidation process to:

$$
min(V_S + V_{LP} + V_B + V_P + V_V + V_{SE} + V_{OP} + V_U)
$$

and

$$
max(V_{OP} + V_U)
$$

Subject to the constraint:

$$
V_S + V_{LP} + V_B + V_P + V_V + V_{SE} + V_{OP} + V_U + V_{OP} + V_U = O_n
$$

Summarized, our motivation in building Warlock is to achieve:

$$
V_{OP} + V_U >> V_S + V_{LP} + V_B + V_P + V_V + V_{SE} + V_{OP} + V_U
$$

Which brings us to the present state and past state of OEV, where $V_{OP} + V_U = 0$.

### The History of OEV

In order to establish a comprehensive understanding of both the value leaked by current oracle update paradigms, and potential value recaptured with Warlock we first identified the primary coefficients and variables that govern the OEV process, which can be expressed as

$
O_{n} = \lambda L - C - R - A
$

The total liquidation notional value $L$ can summed as:

$
L = \sum (P_l \cdot Q_l)
$

Where $P_l$ is the price at which assets were liquidated and $Q_l$ is the quantity of assets involved in each liquidation event.

With the pieces of the puzzle broken out, we found it necessary to establish the overall impact of OEV; and then determine the extent to which value leakage and misaligned value distribution has impacted users and protocols in the past. To quantify these impacts, we conducted a comprehensive retroactive analysis of all major lending, stablecoin (CDP) and perpetual protocols.

#### Methodology

Our approach to unpacking the magnitude and distribution of OEV involved an extensive examination of liquidation events across various DeFi protocols. This process comprised three pivotal steps for each event:

1. __Valuation of Tokens Transacted:__


(a) _Tokens Repaid_: We quantified the USD value allocated to purchase the repaid tokens.

(b) _Tokens Seized_: Similarly, we evaluated the USD revenue accrued from the sale of seized tokens.

(c) _Price Improvement Potential_: We also accounted for possible price improvements accessible through Request for Quote (RFQ) systems.


2. __Estimation of Execution Costs:__


(a) _Gas Price_: We retrieved a ”recent” block’s median gas price (preceding the liquidation event by 3-5 blocks or 30-60 seconds) and applied a 10% discount, hypothesizing that our transaction could be processed at a lower cost due to temporal market dynamics.

(b) _Gas Utilization_: We standardized the gas across various ecosystems and layer-2 networks based on the liquidation transaction’s receipt.

(c) _USD Expenditure on Gas_: This component involved converting the expended gas into its USD equivalent, utilizing prevailing rates.


The profit equation can be simplified to $G = V_s - C_u - C_e$, representing the net gain from each liquidation, where $G$ is the gain, $V_s$ is the USD value of seized tokens, $C_u$ is the cost in USD to purchase repaid tokens, and $C_e$ is the expenditure in ETH denominated in USD value for transaction execution directed towards $V_B + V_P + V_V + V_{SE}$. Thus we say that the $O_g$ -- the gross OEV profit, can be computed as

$
O_g = \sum (V_si - C_ui - C_ei)
$

### Findings

Our analysis unearthed an $O_g$ that approximates $192 million annually, with peaks reaching \$309 million annually in periods of heightened market volatility. Remarkably, a significant portion of this value, \$203 million, remains untapped even when excluding legacy markets like Maker, Aave, and Compound which face bureaucratic hurdles in revising their oracle and liquidation frameworks.

Based on the data and analysis we have performed — regardless of liquidation mechanism or auction process used to date, significant value has been leaked to searchers, auctioneers, and validators. While very little is returned to protocols and end users. Our exploration revealed the scope of this leakage, and underscored the necessity of recapturing this value.

For those interested in a deeper dive or verification of our analysis, we have made the raw datasets available for further exploration.

#### Execution Venue Selection

A liquidation typically necessitates two critical trades: purchasing the asset to repay the debt of the user and selling off the user's collateral. A significant loss of value occurs during this process, primarily as execution is routed through a single automated market maker (AMM), leading to inefficient order routing and pricing.

Despite data indicating that approximately 74% of transaction volume under normal conditions is executed through Request for Quote (RFQ) or similar intent-based venues, our findings reveal that less than 0.1% of liquidations leverage RFQ for trade execution.

This discrepancy highlights a considerable loss to slippage, ranging between approximately 5-20% of the potential profits from liquidation, which escalates in proportion to the value involved in the liquidation.

Consider a recent real-world scenario involving a sizable liquidation performed by prominent searcher coffeebabe.eth, routed through Uniswap, involving two trades:

- _A trade of 75.26 BTC for 1,285.97 ETH_
- _A secondary trade of 1,266.10 seized ETH for 3,136,348.03 USDC_


For the BTC to ETH trade, the expected outcome without slippage (using market rates) might be 1397.69 ETH, but the actual outcome through Uniswap was only 1369.68 ETH, indicating a slippage of approximately 2%.

Similarly, for the ETH to USDC trade, with an expected RFQ outcome of 3,076,623.10 USDC compared to an actual outcome of 3,066,610.22 USDC through Uniswap, the slippage is approximately 0.32%.

With the observed slippage (and lack of positive slippage) applied to the liquidation , it can be concluded that coffeebabe.eth lost approximately 2.08% of the opportunities' notional value to slippage – roughly \$130,000 or ~280% of the otherwise executed liquidation value.

Further, when accounting for the fees/bribes paid to include/bundle the transaction (which Warlock would avoid), the liquidation only profited   about \$949, (meaning Warlock's optimizations would increase potential profit returned in this case by ~185x.)

### Uncaptured Uninformed Flows

The last few years have seen developments such as sealed bid order flow auctions mitigate negative externalities of Maximal Extractable Value (MEV) across various blockchain systems. However, collateral markets still face inefficiencies. Some of these inefficiencies are exacerbated, in fact, by OFAs.

There are two intrinsic sources of value in order flow, inefficient execution, which we just touched upon, and uninformed flow. When a liquidity provider, market maker, or searcher is faced with order flow, it must quote markets at a width equal to or greater than the expected value from a given trade, such that the market maker does not lose money. If the searcher knows that some subset of flow is uninformed, then that flow is much more likely to revert to the mean over time. This means that the searcher is able to offer a tighter quote, leading to price improvement for the trader providing that uninformed flow. This, for example, is how RobinHood is able to provide commission free trading.

Current OFAs suffer from an attempt to maximize value for individual transactions. In doing so, they maximize the first source of value, which is gradually diminishing due to better aggregators and protocol design, and which in a mature market, would not exist as users should already be getting best execution.

By performing per-transaction auctions, OFAs forgo optimizing for the value from uninformed flow. If a searcher is bidding for a given transaction against competing market makers, while the transaction itself may still be uninformed, the fact that the searcher needs to win an auction against other market makers means that the auction becomes informed. Searchers only win the auction if they think that the trade is more valuable than all of their competitors think it is. As a result, every trade inside an OFA becomes informed, and the user does not get the potential improvement they might otherwise get.

Mathematically, the expected utility derived from a trade given the order flow can be represented as $E[U|OF]$, where $U$ signifies the utility and $OF$ indicates the order flow. When the order flow is largely uninformed, noted as $OF_u$, it is often the case that $E[U|OF_u] > E[U|OF_i]$. This reflects a superior expected utility stemming from reduced risk and increased pricing precision.

This is because when a searcher wins an OFA, they are making an implicit judgment with regard to all other market maker valuations that they believe the order to be more valuable than their competitor. Even if the order itself isn't informed, the probability of the order being profitable given that the searcher wins is skewed as if it were informed.

#### Negative Impacts on OEV

Liquidations can almost always be categorized as uninformed flow, seeing as the user is not selling due to a unique view on the market or relying on some external info they're trying to inject into the market - their position is liquidated because it has become uncollateralized, which does not reflect the fair value of the asset that is being sold into the market. However, when this flow passes through order flow auctions, the expected value of the order flow is decreased by the bidding war between searchers, resulting in worse execution for the liquidated user. Warlock addresses this through its vertically integrated searcher/oracle approach, by shielding these liquidations from passing through an OFA we can offer better execution as orders retain more intrinsic value than they otherwise would, while simultaneously optimizing rewards for protocols and end-users who contribute to order flow.

### The Cold Start Problem

OFAs require the bootstrapping of a searcher market -- without fierce competition a given opportunity will not get bid up to the maximum extractable profit and even when it eventually is, there will always be some margin of profit for external searchers, or else they would not waste their time competing to extract it. 

However in most cases constructing a healthy market dynamic that enables such a searcher market is  difficult given protocols face two equally prohibitive issues -- attracting a minimally healthy searcher market, and preventing the compression of searcher profitability.

Without a sizable market share, liquidation profits are either too sparse to begin with, or have profit too compressed to sustain searcher interest, many times leading to the protocol teams themselves running liquidation systems as a liquidator of last resort. This cold start is made worse by both internal protocol auction mechanisms as well as external auction mechanisms (like OFAs) that otherwise further compress searcher profitability.

This means that those who chose to integrate with a product like Oval or API3's OFA are likely to miss out on a substantial share of profits they would otherwise capture via a searcher integrated oracle, which provides a bespoke and efficient solution for a fixed reward. Therefore those offering OFA oriented solutions not only cannot provide hard revenue guarantees, but cannot match Warlock's solution which surpasses their revenue capture by an estimated \~2.5x, leading to more profit for protocols and more value for the end user.

This problem is cogently characterized in the recent literature by Chitra et al. (insert reference in bibliography)

### Latency Problems

Latency (alongside asset volatility) is core to a protocol's modeling for the LTV or leverage provided for a given asset. Given an asset needs to be liquidated before it's collateralization ratio is passed, latency directly impacts a protocols ability to properly ensure protocol health and therefore provide leverage to its users. 

However liquidations routed through OEV auctions are ensured to face delays which, depending on design and execution environment, range in duration and likewise range from restrictive to entirely incompatible and antagonistic.

For example, in all currently publicly released OEV auction designs a delay ranging from roughly 3 to 45 seconds is required to integrate already inherently slow/"stale" oracle updates. This delay stands in opposition to the requirements of any perpetual protocol requiring high leverage (and therefore low latency), as well as any low latency execution environment (e.g. Arbitrum's average \~250ms blocktime).

With Warlock, these concerns are entirely ameliorated as our off-chain infrastructure provides a low to "zero" latency feed from which the ArchWarlock liquidation system identifies potential liquidations and instantly pushes the prices necessary to maintain partner protocol health and likewise facilitate a protocol's expansion of leverage.

### Searcher Collusion

Searchers have incentives to collude in auctions to not bid away all profits, and indeed to either form direct relationships with; or be block builders and validators themselves. This collusion happens, and it's a missed opportunity not to enshrine it in a way which is beneficial to other key stakeholders such as protocols.

### Integrated Searcher/Oracle Inventory

While Warlock increases execution efficiency through the optimization of currently available execution paths, Warlock also has the opportunity to optimize further by disintermediating the exchanges required to perform liquidation.

As demonstrated previously with regard to slippage, a liquidation's value is significantly reduced by notional value leakage. One additional such source of leakage would then be the fees paid to execution venues. 

However unlike our contemporaries, with Warlock there is no need for a secondary venue as Warlock provides direct RFQ connectors – further increasing liquidation efficiency and providing an additional value recapture mechanism through PFOF.

### Gas Optimization

Similarly, we find that even with a quixotic zero fee on Flashbots (or Oval), significant inefficiencies exist within the execution of liquidation transactions themselves.

Through unnecessary auction processes, time restriction naturally leads to execution cost inflation and value leakage, regardless of whether through the mempool, on a private relay, or a bespoke auction process.

More specifically, our data shows that the average liquidation, even post-flashbots, overpays by \~10-30\%, resulting in value leakage that is significant for smaller liquidations, though insignificant as size increases.

## Mechanism

Warlock is a low latency omnichain oracle and integrated liquidation engine that enhances DeFi safety \& profitability by bundling liquidations and oracle updates. By utilizing Warlock, lending markets and derivatives exchanges are able to recapture lost value and distribute it equitably to their users. In doing so integrated protocols increase user retention and in turn create a positive feedback loop for user experience and blockspace demand. 

Warlock's unique mechanism combines low-latency off-chain data with a profit-sharing model that benefits all parties involved. We subsidize the collection of off-chain data through profits generated from market state changes brought on-chain via oracle updates, so price feeds are provided to protocols at zero cost. A significant portion of these profits, derived from arbitraging state changes, is redirected back to integrated protocols within the ecosystem, fostering a more balanced and sustainable model.

### Components

Our system utilizes an integrated searcher/oracle design, and includes components one would expect in each, with the addition of permissioned execution infrastructure between both previously separate systems.


#### Off-Chain:

Our infrastructure is implemented in Rust using alloy, tokio, sqlx, tonic and petgraph. It's designed to be cloud native, cloud neutral, and highly available.

#### Warlock Council

The Warlock Council is the cornerstone of Warlock's price aggregation system. It harnesses a blend of off-chain and on-chain data sources, utilizing algorithms based on Time-Weighted Average Price (TWAP) and Volume-Weighted Average Price (VWAP) methodologies. These methodologies ensure that the prices reflected are accurate and representative of true market conditions over a specific time period.

The council is composed of an off-chain graph, with tokens as nodes, and both on and off chain markets as directed edges on the graph. Prices are computed outwards from USD as a single source shortest-path for each new block. These prices are then used to attest spot prices to a historical spot price database for tokens. These historical spot prices are used to compute various metrics, such as TWAP and VWAP.

Furthermore, the Warlock Council is designed with fail-safes and redundancy mechanisms to ensure continuous operation even in the event of individual node failures. The Council's operations and updates are transparent and can be audited in real-time by any participant using public data, ensuring a trustless system for price data aggregation.

#### Warlock Signer

The Warlock Signer is a multi-signature contract responsible for the validation and signing of price data before it's updated on the blockchain. It uses the secp256k1 signature scheme, which is known for its robustness and is widely used in blockchain systems, including Ethereum.

The Signer acts as a final checkpoint for price data, where multiple signatures from designated signatories within the Warlock Council are required to authorize an update. This multi-signature approach adds an additional layer of security, preventing any single point of failure or unauthorized data manipulation.

To further enhance security, the Warlock Signer implements an adaptive quorum system, where the number of signatures required can be adjusted based on the prevailing network conditions or perceived security threats. The identities of the signatories are kept anonymous and are frequently rotated to prevent collusion and ensure the integrity of the price signing process.

#### ArchWarlock

The Arch Warlock infrastructure monitors positions from integrated protocols as possible markets, and runs multiple search algorithms. Unhealthy positions are detected on simulated updates to the oracles based on the latest market information from the Warlock council. When an unhealthy position is detected, the on-chain oracle is updated and the liquidation is performed in a single atomic transaction.

Permissioned actors execute price update transactions to protect them from needing to be submitted to an order flow auction or priority gas auction. This in-turn protects the oracle update from external sources of OEV, and obviates the need for an OFA on update - which allows the maximum possible profit to be passed back to integrated protocol.

The graph of markets and enumeration of cyclical paths through those markets is used to optimally route liquidations-on-update to multiple sources of liquidity using weighted equal cost multipath routing. This data is additionally used to power gRPC streaming endpoints for spot prices and various composite indicators, which provides price feed functionality to power dApps.

### On-Chain

**DataFeed.sol**

Warlock's DataFeed contract serves as the central on-chain component of Warlock's architecture, and facilitates primary oracle functionality and serves as a single entry point for all activity:

This design offers a number of advantages, namely the scalable addition of assets, and a predictable request structure for consumers (meaning significantly easier integrations and permissionless market support).

- Price updates
- Price requests
- Submitted data verification

Unlike competitors/contemporaries which require unique deployments for every market pair, a consumer can request a price for any given market asset and base currency.

**Validating Price Updates**

Price updates are submitted with a valid secp256k1 signature (in EVMs complying with the EIP-712 sign typed data standard) and can be submitted by any party to DataFeed.sol for verification. 

In order for a price update to be valid/verified, the signer must resolve to the Warlock Signer, and in the case of public price submissions, greater than a settable amount of time must have passed between oracle updates – ensuring proprietary oracle update flow while also providing redundancy processes that offer the same risk profile as other contemporary providers.

**Executor.sol**

Unlike other oracles, Warlock bundles liquidations with oracle updates — requiring both temporary proprietary access to oracle update flow, as well as interfaces to perform liquidations.

Executor.sol serves as Warlock's intermediary contract to push permissioned oracle flow, execute liquidations, and provide kickbacks to partners.

More specifically, the Executor owns all temporarily permissioned flow granted by Warlock's DataFeed. We are then able to execute liquidations through any given external protocol with a generic multicall, while returning value to partners without requiring unnecessary transfers on each liquidation.

**Facades**

In order to provide integrators a seamless integration experience, we have developed a system of interfaces/adapters allowing easy integration \& replacement of existing systems like Chainlink, Pyth, API3, and Redstone.

### Value Return

Given Warlock's primary differentiation is the ability to capture value and return it to protocols and users, many of Warlock's largest use cases relate to the re-distribution of that value capture.

#### Subsidized transaction costs ####

In most ecosystems this revenue would allow users to transact in a fully subsidized manner for any high-value transaction. In 2023 Aave v2 users spent a total of \$4,751,330.71 on gas, internalizing liquidation revenue via Warlock would allow users to transact at zero cost while still leaving \$24,349,166.18 to be channeled towards other value return mechanisms annually

Formalized, the revenue generated by Warlock can offset transaction costs for users:

$
C_u = C_t - R_w
$

where $C_u$ is the user's transaction cost, $C_t$ is the total transaction cost, and $R_w$ is the revenue generated by Warlock.

The additional revenue can boost lending yields for specific assets or stablecoins:

$
Y_s = Y_b + \frac{R_w}{TVL_s}
$

where $Y_s$ is the subsidized yield, $Y_b$ is the base yield, $R_w$ is the revenue generated by Warlock, and $TVL_s$ is the total value locked for the specific asset or stablecoin.

The revenue can be used for token buybacks, impacting the token supply:

$
S_t = S_i - {R_w}{P_t}
$

where $S_t$ is the new token supply, $S_i$ is the initial token supply, $R_w$ is the revenue generated by Warlock, and $P_t$ is the token price.

The revenue can be allocated to insurance funds or staking rewards to enhance protocol security:

$
F_i = F_0 + \alpha \cdot R_w
$

$
R_s = R_0 + \beta \cdot R_w
$

where $F_i$ is the new insurance fund balance, $F_0$ is the initial insurance fund balance, $R_s$ is the new staking reward, $R_0$ is the initial staking reward, $\alpha$ and $\beta$ are allocation coefficients, and $R_w$ is the revenue generated by Warlock.

#### Subsidized Lending Yields ####

Compound v2 has historically generated \$24.1m in annual OEV, which applied to Compound's current  \$1b TVL would provide a potential 2.4\% boost to yields for all lenders, or boost yields 21.1\% for stablecoin deposits.

Aave v2 has historically generated a similar \$25.4m in annual OEV which could be applied to their \$3.5b in deposits and would boost all yields .9\%. Alternatively applied to their GHO stablecoin, Aave could increase staker yields by over 100\%.

#### Token Buybacks ####

Protocols could redirect the funds returned to them to perform token buybacks. At current prices, Compound could buy back \~ 4.9\% of their token supply per year, while Aave could buy back roughly 2.1\%.

#### Increased Protocol Security #### 

Increased Protocol Security ####

Assuming scalable coverage was available, Aave could purchase insurance for nearly a third (\~29\%) of their deposits.

Aave has \$355m staked to their security module as of 2/7/24, earning \~4.5\% APY – With Warlock, Aave could increase rewards to \~13\% APY or conversely scale their security module to over \$1,000,000,000.

Platforms can also redirect OEV to shortfall modules to cover the risk of bad liquidations or other shortfall events.

### Path to decentralization

The Warlock initial release favors efficiency and best execution over decentralization. This reduces time to market and allows Warlock to mitigate the issues with OEV more rapidly. Decentralization is something that is important, so while on launch Warlock's design chooses reduced release time over decentralization, the decentralization of the Warlock is a clear process that will be executed in the coming months.

#### Price Feed Redundancy

While Warlock's Executor maintains proprietary rights to push price updates to DataFeed.sol, this proprietary period is limited to a certain time period – settable per asset pair.

Through this time delayed functionality, Warlock offers the ability to guarantee decentralized price feed pushes should a calamity event hit and our system fails to either update a price in a timely manner or identify a liquidation opportunity to capture.

In either case, a third party can access the off-chain signed Warlock Council price feed and submit signed prices directly. In doing so these third parties access otherwise proprietary liquidation opportunities, ensuring proper incentives and market health for our partners.

In other words, although Warlock's price feeds launch without the full decentralized functionality of the Warlock Council, our integrators can be assured that healthy price updates will continue even in cases of otherwise unreliable oracle behavior or liquidation service downtime.

Specifically, Warlock employs a proprietary update window of duration $T_p$. If no update occurs within this window, a fallback mechanism is triggered, allowing external actors to update the oracle feed from the signed off-chain feed. This window is defined as:

$
T_e = T_p + T_d
$

where $T_e$ is the external update window and $T_d$ is a predefined delay.

If the oracle feed remains stale for a period $T_s$ after the external update window, a second fallback mechanism is triggered, syncing the Warlock feed with a trusted external oracle like Chainlink. This condition can be expressed as:

$
T_s > T_e + T_t
$

where $T_t$ is a predefined threshold for staleness.

#### Liquidation Redundancy

While the liquidation fallback mechanism described above ensures that our oracle update trigger systems have redundancy and reliability, it is also important to ensure redundancy with regard to our price feeds themselves.

That said, to further increase the reliability and security of Warlock's oracles, we have also implemented a fallback for our price feeds.

Similar to Warlock's proprietary push window, there is also a parameterized window per pair, after which a settable fallback is read and pushed to Warlock's price feed on Datafeed.sol.

An example (assuming the window for both fallback mechanisms is one minute):


1. Warlock pushes the price feed for ETH/USD
2. 60 seconds passes – Enabling the first fallback mechanism
3. Unfortunately, the off-chain price feeds are all stale, preventing third party pushes.
4. 60 seconds passes – Enabling the second fallback mechanism
5. A third party now calls \`fallbackPush\`, syncing Warlock's price feed with a third-party like Chainlink 


## Conclusion

If you are interested in integrating Warlock into your project, we’d love to hear from you.

You can reach us on Twitter at [@traversajulian](https://twitter.com/traversajulian), [@0xAlcibiades](https://twitter.com/0xalcibiades), and [@CapitalGrug](https://twitter.com/CapitalGrug).
`;
const litepaperAuthors = [
	{ name: 'Julian Traversa', link: 'https://twitter.com/traversajulian' },
	{ name: 'Alcibiades', link: 'https://twitter.com/0xalcibiades' },
	{ name: 'Grug', link: 'https://twitter.com/CapitalGrug' }
];
const litepaperAck: [name: string, link: string][] = [
	['Dave White', 'https://www.paradigm.xyz/team/davewhite'] //
];

export interface LitepaperPageProps {
	content: MDXRemoteSerializeResult;
}

const LitepaperPage: ExtendedNextPage<LitepaperPageProps> = ({ content }) => {
	return (
		<>
			<div className="w-screen bg-black pt-[4.6rem] text-white">
				<div className="litepaper__container">
					<div className="mx-auto max-w-full sm:max-w-2xl">
						<h1 className="mb-5 font-paradigm text-[2.75rem] font-normal leading-[1.3]">Warlock Litepaper</h1>
						<p className="mb-6 font-authors text-xs leading-5 text-paradigm-gray">
							Date: April 14, 2024 |{' '}
							{litepaperAuthors.map(({ name, link }, i) => (
								<a href={link}>{`${name}${i === litepaperAuthors.length - 1 ? '' : ', '}`}</a>
							))}
						</p>
						<p className="mb-6 font-authors">
							<p className="mb-6">Contents</p>
							<p>
								<ol className="list-inside list-decimal text-xs">
									<li>
										<ScrollingToCLink id="introduction" text="Introduction" />
									</li>
									<li>
										<ScrollingToCLink id="motivation" text="Motivation" />
										<ol className="ml-6 list-inside list-decimal text-xs">
											<li>
												<ScrollingToCLink id="value-distribution-inequity" text="Value Distribution Inequity" />
											</li>
											<li>
												<ScrollingToCLink id="the-history-of-oev" text="The History of OEV" />
												<ol className="ml-6 list-inside list-decimal text-xs">
													<li>
														<ScrollingToCLink id="methodology" text="Methodology" />
													</li>
												</ol>
											</li>
											<li>
												<ScrollingToCLink id="findings" text="Findings" />
												<ol className="ml-6 list-inside list-decimal text-xs">
													<li>
														<ScrollingToCLink id="execution-venue-selection" text="Execution Venue Selection" />
													</li>
													<li>
														<ScrollingToCLink id="uncaptured-uninformed-flows" text="Uncaptured Uninformed Flows" />
														<ol className="ml-6 list-inside list-decimal text-xs">
															<li>
																<ScrollingToCLink id="impact-on-oev" text="Impact on OEV" />
															</li>
														</ol>
													</li>
													<li>
														<ScrollingToCLink id="cold-start-problems" text="Cold Start Problems" />
													</li>
													<li>
														<ScrollingToCLink id="prohibitive-latency" text="Prohibitive Latency" />
													</li>
													<li>
														<ScrollingToCLink id="searcher-collusion" text="Searcher Collusion" />
													</li>
													<li>
														<ScrollingToCLink id="unintegrated-inventory" text="Unintegrated Inventory" />
													</li>
													<li>
														<ScrollingToCLink id="gas-expenditures" text="Gas Expenditures" />
													</li>
												</ol>
											</li>
											<li>
												<ScrollingToCLink id="mechanism" text="Mechanism" />
												<ol className="ml-6 list-inside list-decimal text-xs">
													<li>
														<ScrollingToCLink id="components" text="Components" />
													</li>
													<ol className="ml-6 list-inside list-decimal text-xs">
														<li>
															<ScrollingToCLink id="off-chain" text="Off-Chain" />
														</li>
														<li>
															<ScrollingToCLink id="on-chain" text="On-Chain" />
														</li>
													</ol>
													<li>
														<ScrollingToCLink id="value-return" text="Value Return" />
													</li>
													<li>
														<ScrollingToCLink id="path-to-decentralization" text="Path To Decentralization" />
														<ol className="ml-6 list-inside list-decimal text-xs">
															<li>
																<ScrollingToCLink id="price-feed-redundancy" text="Price-Feed-Redundancy" />
															</li>
															<li>
																<ScrollingToCLink id="liquidation-redundancy" text="Liquidation Redundancy" />
															</li>
															<li>
																<ScrollingToCLink id="restaking-slashing-bonding" text="Restaking / Bonding" />
															</li>
															<li>
																<ScrollingToCLink id="zero-knowledge-circuits" text="Zero-Knowledge Circuits" />
															</li>
														</ol>
													</li>
													<li>
														<ScrollingToCLink id="use-cases" text="Use Cases" />
														<ol className="ml-6 list-inside list-decimal text-xs">
															<li>
																<ScrollingToCLink id="lending-markets" text="Lending Markets" />
															</li>
															<li>
																<ScrollingToCLink id="derivatives-markets" text="Derivatives Markets" />
															</li>
														</ol>
													</li>
												</ol>
											</li>
										</ol>
									</li>
									<li>
										<ScrollingToCLink id="conclusion" text="Conclusion" />
									</li>
								</ol>
							</p>
						</p>
						<div className="litepaper w-full">
							<MDXRemote {...content} lazy />
						</div>
					</div>
					<div className="pb-8" />
					<hr />
					<div className="pb-32 pt-2 font-authors text-[12px] text-white">
						Acknowledgments:{' '}
						{litepaperAck.map(([name, link], i) => (
							<>
								<a key={name} href={link} className="cursor-pointer text-paradigm-gray">
									{name}
								</a>
								{litepaperAck.length === i + 1 ? null : <span className="text-black">, </span>}
							</>
						))}
					</div>
				</div>
			</div>
		</>
	);
};
LitepaperPage.Layout = PlainDisplayLayout;

export const getStaticProps: GetStaticProps<LitepaperPageProps> = async () => {
	const mdxSource = await serialize(litepaperContent, {
		scope: data,
		mdxOptions: {
			remarkPlugins: [require('remark-autolink-headings'), require('remark-slug'), require('remark-code-titles'), remarkMath],
			rehypePlugins: [rehypePrism, rehypeKatex]
		}
	});

	return {
		props: {
			content: mdxSource
		}
	};
};

export default LitepaperPage;
