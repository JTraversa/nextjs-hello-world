import gql from 'graphql-tag';

export const GetTopGooberBalances = gql`
	query GetTopGooberBalances {
		gooberBalances(orderBy: balance, orderDirection: desc, first: 12) {
			id
			balance
		}
	}
`;
export const GetGooberDayData = gql`
	query GetGooberDayData {
		gooberDayDatas(orderBy: date, orderDirection: desc) {
			id
			date
			kDelta
		}
	}
`;
