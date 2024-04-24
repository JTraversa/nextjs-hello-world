/* tslint:disable */ /* eslint-disable @typescript-eslint/consistent-type-definitions */
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(endpoint: string, requestInit: RequestInit, query: string, variables?: TVariables) {
	return async (): Promise<TData> => {
		const res = await fetch(endpoint, {
			method: 'POST',
			...requestInit,
			body: JSON.stringify({ query, variables })
		});

		const json = await res.json();

		if (json.errors) {
			const { message } = json.errors[0];

			throw new Error(message);
		}

		return json.data;
	};
}
/** All built-in and custom scalars, mapped to their actual values */
export interface Scalars {
	ID: string;
	String: string;
	Boolean: boolean;
	Int: number;
	Float: number;
	BigDecimal: string;
	BigInt: string;
	Bytes: string;
}

export interface Account {
	__typename: 'Account';
	ERC721operatorOperator: Erc721Operator;
	ERC721operatorOwner: Erc721Operator;
	ERC721tokens: Erc721Token;
	ERC721transferFromEvent: Erc721Transfer;
	ERC721transferToEvent: Erc721Transfer;
	asERC721?: Maybe<Erc721Contract>;
	id: Scalars['ID'];
}

export interface Account_Filter {
	ERC721operatorOperator_?: InputMaybe<Erc721Operator_Filter>;
	ERC721operatorOwner_?: InputMaybe<Erc721Operator_Filter>;
	ERC721tokens_?: InputMaybe<Erc721Token_Filter>;
	ERC721transferFromEvent_?: InputMaybe<Erc721Transfer_Filter>;
	ERC721transferToEvent_?: InputMaybe<Erc721Transfer_Filter>;
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	asERC721?: InputMaybe<Scalars['String']>;
	asERC721_?: InputMaybe<Erc721Contract_Filter>;
	asERC721_contains?: InputMaybe<Scalars['String']>;
	asERC721_contains_nocase?: InputMaybe<Scalars['String']>;
	asERC721_ends_with?: InputMaybe<Scalars['String']>;
	asERC721_ends_with_nocase?: InputMaybe<Scalars['String']>;
	asERC721_gt?: InputMaybe<Scalars['String']>;
	asERC721_gte?: InputMaybe<Scalars['String']>;
	asERC721_in?: InputMaybe<Array<Scalars['String']>>;
	asERC721_lt?: InputMaybe<Scalars['String']>;
	asERC721_lte?: InputMaybe<Scalars['String']>;
	asERC721_not?: InputMaybe<Scalars['String']>;
	asERC721_not_contains?: InputMaybe<Scalars['String']>;
	asERC721_not_contains_nocase?: InputMaybe<Scalars['String']>;
	asERC721_not_ends_with?: InputMaybe<Scalars['String']>;
	asERC721_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	asERC721_not_in?: InputMaybe<Array<Scalars['String']>>;
	asERC721_not_starts_with?: InputMaybe<Scalars['String']>;
	asERC721_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	asERC721_starts_with?: InputMaybe<Scalars['String']>;
	asERC721_starts_with_nocase?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
}

export type Account_OrderBy =
	| 'ERC721operatorOperator'
	| 'ERC721operatorOwner'
	| 'ERC721tokens'
	| 'ERC721transferFromEvent'
	| 'ERC721transferToEvent'
	| 'asERC721'
	| 'id';

export interface BlockChangedFilter {
	number_gte: Scalars['Int'];
}

export interface Block_Height {
	hash?: InputMaybe<Scalars['Bytes']>;
	number?: InputMaybe<Scalars['Int']>;
	number_gte?: InputMaybe<Scalars['Int']>;
}

export interface Erc721Contract {
	__typename: 'ERC721Contract';
	asAccount: Account;
	id: Scalars['ID'];
	name?: Maybe<Scalars['String']>;
	operators: Erc721Operator;
	supportsMetadata?: Maybe<Scalars['Boolean']>;
	symbol?: Maybe<Scalars['String']>;
	tokens: Erc721Token;
	transfers: Erc721Transfer;
}

export interface Erc721Contract_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	asAccount?: InputMaybe<Scalars['String']>;
	asAccount_?: InputMaybe<Account_Filter>;
	asAccount_contains?: InputMaybe<Scalars['String']>;
	asAccount_contains_nocase?: InputMaybe<Scalars['String']>;
	asAccount_ends_with?: InputMaybe<Scalars['String']>;
	asAccount_ends_with_nocase?: InputMaybe<Scalars['String']>;
	asAccount_gt?: InputMaybe<Scalars['String']>;
	asAccount_gte?: InputMaybe<Scalars['String']>;
	asAccount_in?: InputMaybe<Array<Scalars['String']>>;
	asAccount_lt?: InputMaybe<Scalars['String']>;
	asAccount_lte?: InputMaybe<Scalars['String']>;
	asAccount_not?: InputMaybe<Scalars['String']>;
	asAccount_not_contains?: InputMaybe<Scalars['String']>;
	asAccount_not_contains_nocase?: InputMaybe<Scalars['String']>;
	asAccount_not_ends_with?: InputMaybe<Scalars['String']>;
	asAccount_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	asAccount_not_in?: InputMaybe<Array<Scalars['String']>>;
	asAccount_not_starts_with?: InputMaybe<Scalars['String']>;
	asAccount_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	asAccount_starts_with?: InputMaybe<Scalars['String']>;
	asAccount_starts_with_nocase?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	name?: InputMaybe<Scalars['String']>;
	name_contains?: InputMaybe<Scalars['String']>;
	name_contains_nocase?: InputMaybe<Scalars['String']>;
	name_ends_with?: InputMaybe<Scalars['String']>;
	name_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_gt?: InputMaybe<Scalars['String']>;
	name_gte?: InputMaybe<Scalars['String']>;
	name_in?: InputMaybe<Array<Scalars['String']>>;
	name_lt?: InputMaybe<Scalars['String']>;
	name_lte?: InputMaybe<Scalars['String']>;
	name_not?: InputMaybe<Scalars['String']>;
	name_not_contains?: InputMaybe<Scalars['String']>;
	name_not_contains_nocase?: InputMaybe<Scalars['String']>;
	name_not_ends_with?: InputMaybe<Scalars['String']>;
	name_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	name_not_in?: InputMaybe<Array<Scalars['String']>>;
	name_not_starts_with?: InputMaybe<Scalars['String']>;
	name_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	name_starts_with?: InputMaybe<Scalars['String']>;
	name_starts_with_nocase?: InputMaybe<Scalars['String']>;
	operators_?: InputMaybe<Erc721Operator_Filter>;
	supportsMetadata?: InputMaybe<Scalars['Boolean']>;
	supportsMetadata_in?: InputMaybe<Array<Scalars['Boolean']>>;
	supportsMetadata_not?: InputMaybe<Scalars['Boolean']>;
	supportsMetadata_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
	symbol?: InputMaybe<Scalars['String']>;
	symbol_contains?: InputMaybe<Scalars['String']>;
	symbol_contains_nocase?: InputMaybe<Scalars['String']>;
	symbol_ends_with?: InputMaybe<Scalars['String']>;
	symbol_ends_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_gt?: InputMaybe<Scalars['String']>;
	symbol_gte?: InputMaybe<Scalars['String']>;
	symbol_in?: InputMaybe<Array<Scalars['String']>>;
	symbol_lt?: InputMaybe<Scalars['String']>;
	symbol_lte?: InputMaybe<Scalars['String']>;
	symbol_not?: InputMaybe<Scalars['String']>;
	symbol_not_contains?: InputMaybe<Scalars['String']>;
	symbol_not_contains_nocase?: InputMaybe<Scalars['String']>;
	symbol_not_ends_with?: InputMaybe<Scalars['String']>;
	symbol_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_not_in?: InputMaybe<Array<Scalars['String']>>;
	symbol_not_starts_with?: InputMaybe<Scalars['String']>;
	symbol_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	symbol_starts_with?: InputMaybe<Scalars['String']>;
	symbol_starts_with_nocase?: InputMaybe<Scalars['String']>;
	tokens_?: InputMaybe<Erc721Token_Filter>;
	transfers_?: InputMaybe<Erc721Transfer_Filter>;
}

export type Erc721Contract_OrderBy = 'asAccount' | 'id' | 'name' | 'operators' | 'supportsMetadata' | 'symbol' | 'tokens' | 'transfers';

export interface Erc721Operator {
	__typename: 'ERC721Operator';
	approved: Scalars['Boolean'];
	contract: Erc721Contract;
	id: Scalars['ID'];
	operator: Account;
	owner: Account;
}

export interface Erc721Operator_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	approved?: InputMaybe<Scalars['Boolean']>;
	approved_in?: InputMaybe<Array<Scalars['Boolean']>>;
	approved_not?: InputMaybe<Scalars['Boolean']>;
	approved_not_in?: InputMaybe<Array<Scalars['Boolean']>>;
	contract?: InputMaybe<Scalars['String']>;
	contract_?: InputMaybe<Erc721Contract_Filter>;
	contract_contains?: InputMaybe<Scalars['String']>;
	contract_contains_nocase?: InputMaybe<Scalars['String']>;
	contract_ends_with?: InputMaybe<Scalars['String']>;
	contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
	contract_gt?: InputMaybe<Scalars['String']>;
	contract_gte?: InputMaybe<Scalars['String']>;
	contract_in?: InputMaybe<Array<Scalars['String']>>;
	contract_lt?: InputMaybe<Scalars['String']>;
	contract_lte?: InputMaybe<Scalars['String']>;
	contract_not?: InputMaybe<Scalars['String']>;
	contract_not_contains?: InputMaybe<Scalars['String']>;
	contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
	contract_not_ends_with?: InputMaybe<Scalars['String']>;
	contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	contract_not_in?: InputMaybe<Array<Scalars['String']>>;
	contract_not_starts_with?: InputMaybe<Scalars['String']>;
	contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	contract_starts_with?: InputMaybe<Scalars['String']>;
	contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	operator?: InputMaybe<Scalars['String']>;
	operator_?: InputMaybe<Account_Filter>;
	operator_contains?: InputMaybe<Scalars['String']>;
	operator_contains_nocase?: InputMaybe<Scalars['String']>;
	operator_ends_with?: InputMaybe<Scalars['String']>;
	operator_ends_with_nocase?: InputMaybe<Scalars['String']>;
	operator_gt?: InputMaybe<Scalars['String']>;
	operator_gte?: InputMaybe<Scalars['String']>;
	operator_in?: InputMaybe<Array<Scalars['String']>>;
	operator_lt?: InputMaybe<Scalars['String']>;
	operator_lte?: InputMaybe<Scalars['String']>;
	operator_not?: InputMaybe<Scalars['String']>;
	operator_not_contains?: InputMaybe<Scalars['String']>;
	operator_not_contains_nocase?: InputMaybe<Scalars['String']>;
	operator_not_ends_with?: InputMaybe<Scalars['String']>;
	operator_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	operator_not_in?: InputMaybe<Array<Scalars['String']>>;
	operator_not_starts_with?: InputMaybe<Scalars['String']>;
	operator_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	operator_starts_with?: InputMaybe<Scalars['String']>;
	operator_starts_with_nocase?: InputMaybe<Scalars['String']>;
	owner?: InputMaybe<Scalars['String']>;
	owner_?: InputMaybe<Account_Filter>;
	owner_contains?: InputMaybe<Scalars['String']>;
	owner_contains_nocase?: InputMaybe<Scalars['String']>;
	owner_ends_with?: InputMaybe<Scalars['String']>;
	owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
	owner_gt?: InputMaybe<Scalars['String']>;
	owner_gte?: InputMaybe<Scalars['String']>;
	owner_in?: InputMaybe<Array<Scalars['String']>>;
	owner_lt?: InputMaybe<Scalars['String']>;
	owner_lte?: InputMaybe<Scalars['String']>;
	owner_not?: InputMaybe<Scalars['String']>;
	owner_not_contains?: InputMaybe<Scalars['String']>;
	owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
	owner_not_ends_with?: InputMaybe<Scalars['String']>;
	owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	owner_not_in?: InputMaybe<Array<Scalars['String']>>;
	owner_not_starts_with?: InputMaybe<Scalars['String']>;
	owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	owner_starts_with?: InputMaybe<Scalars['String']>;
	owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export type Erc721Operator_OrderBy = 'approved' | 'contract' | 'id' | 'operator' | 'owner';

export interface Erc721Token {
	__typename: 'ERC721Token';
	approval: Account;
	contract: Erc721Contract;
	id: Scalars['ID'];
	identifier: Scalars['BigInt'];
	owner: Account;
	transfers: Erc721Transfer;
	uri?: Maybe<Scalars['String']>;
}

export interface Erc721Token_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	approval?: InputMaybe<Scalars['String']>;
	approval_?: InputMaybe<Account_Filter>;
	approval_contains?: InputMaybe<Scalars['String']>;
	approval_contains_nocase?: InputMaybe<Scalars['String']>;
	approval_ends_with?: InputMaybe<Scalars['String']>;
	approval_ends_with_nocase?: InputMaybe<Scalars['String']>;
	approval_gt?: InputMaybe<Scalars['String']>;
	approval_gte?: InputMaybe<Scalars['String']>;
	approval_in?: InputMaybe<Array<Scalars['String']>>;
	approval_lt?: InputMaybe<Scalars['String']>;
	approval_lte?: InputMaybe<Scalars['String']>;
	approval_not?: InputMaybe<Scalars['String']>;
	approval_not_contains?: InputMaybe<Scalars['String']>;
	approval_not_contains_nocase?: InputMaybe<Scalars['String']>;
	approval_not_ends_with?: InputMaybe<Scalars['String']>;
	approval_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	approval_not_in?: InputMaybe<Array<Scalars['String']>>;
	approval_not_starts_with?: InputMaybe<Scalars['String']>;
	approval_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	approval_starts_with?: InputMaybe<Scalars['String']>;
	approval_starts_with_nocase?: InputMaybe<Scalars['String']>;
	contract?: InputMaybe<Scalars['String']>;
	contract_?: InputMaybe<Erc721Contract_Filter>;
	contract_contains?: InputMaybe<Scalars['String']>;
	contract_contains_nocase?: InputMaybe<Scalars['String']>;
	contract_ends_with?: InputMaybe<Scalars['String']>;
	contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
	contract_gt?: InputMaybe<Scalars['String']>;
	contract_gte?: InputMaybe<Scalars['String']>;
	contract_in?: InputMaybe<Array<Scalars['String']>>;
	contract_lt?: InputMaybe<Scalars['String']>;
	contract_lte?: InputMaybe<Scalars['String']>;
	contract_not?: InputMaybe<Scalars['String']>;
	contract_not_contains?: InputMaybe<Scalars['String']>;
	contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
	contract_not_ends_with?: InputMaybe<Scalars['String']>;
	contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	contract_not_in?: InputMaybe<Array<Scalars['String']>>;
	contract_not_starts_with?: InputMaybe<Scalars['String']>;
	contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	contract_starts_with?: InputMaybe<Scalars['String']>;
	contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	identifier?: InputMaybe<Scalars['BigInt']>;
	identifier_gt?: InputMaybe<Scalars['BigInt']>;
	identifier_gte?: InputMaybe<Scalars['BigInt']>;
	identifier_in?: InputMaybe<Array<Scalars['BigInt']>>;
	identifier_lt?: InputMaybe<Scalars['BigInt']>;
	identifier_lte?: InputMaybe<Scalars['BigInt']>;
	identifier_not?: InputMaybe<Scalars['BigInt']>;
	identifier_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	owner?: InputMaybe<Scalars['String']>;
	owner_?: InputMaybe<Account_Filter>;
	owner_contains?: InputMaybe<Scalars['String']>;
	owner_contains_nocase?: InputMaybe<Scalars['String']>;
	owner_ends_with?: InputMaybe<Scalars['String']>;
	owner_ends_with_nocase?: InputMaybe<Scalars['String']>;
	owner_gt?: InputMaybe<Scalars['String']>;
	owner_gte?: InputMaybe<Scalars['String']>;
	owner_in?: InputMaybe<Array<Scalars['String']>>;
	owner_lt?: InputMaybe<Scalars['String']>;
	owner_lte?: InputMaybe<Scalars['String']>;
	owner_not?: InputMaybe<Scalars['String']>;
	owner_not_contains?: InputMaybe<Scalars['String']>;
	owner_not_contains_nocase?: InputMaybe<Scalars['String']>;
	owner_not_ends_with?: InputMaybe<Scalars['String']>;
	owner_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	owner_not_in?: InputMaybe<Array<Scalars['String']>>;
	owner_not_starts_with?: InputMaybe<Scalars['String']>;
	owner_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	owner_starts_with?: InputMaybe<Scalars['String']>;
	owner_starts_with_nocase?: InputMaybe<Scalars['String']>;
	transfers_?: InputMaybe<Erc721Transfer_Filter>;
	uri?: InputMaybe<Scalars['String']>;
	uri_contains?: InputMaybe<Scalars['String']>;
	uri_contains_nocase?: InputMaybe<Scalars['String']>;
	uri_ends_with?: InputMaybe<Scalars['String']>;
	uri_ends_with_nocase?: InputMaybe<Scalars['String']>;
	uri_gt?: InputMaybe<Scalars['String']>;
	uri_gte?: InputMaybe<Scalars['String']>;
	uri_in?: InputMaybe<Array<Scalars['String']>>;
	uri_lt?: InputMaybe<Scalars['String']>;
	uri_lte?: InputMaybe<Scalars['String']>;
	uri_not?: InputMaybe<Scalars['String']>;
	uri_not_contains?: InputMaybe<Scalars['String']>;
	uri_not_contains_nocase?: InputMaybe<Scalars['String']>;
	uri_not_ends_with?: InputMaybe<Scalars['String']>;
	uri_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	uri_not_in?: InputMaybe<Array<Scalars['String']>>;
	uri_not_starts_with?: InputMaybe<Scalars['String']>;
	uri_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	uri_starts_with?: InputMaybe<Scalars['String']>;
	uri_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export type Erc721Token_OrderBy = 'approval' | 'contract' | 'id' | 'identifier' | 'owner' | 'transfers' | 'uri';

export interface Erc721Transfer extends Event {
	__typename: 'ERC721Transfer';
	contract: Erc721Contract;
	emitter: Account;
	from: Account;
	id: Scalars['ID'];
	timestamp: Scalars['BigInt'];
	to: Account;
	token: Erc721Token;
	transaction: Transaction;
}

export interface Erc721Transfer_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	contract?: InputMaybe<Scalars['String']>;
	contract_?: InputMaybe<Erc721Contract_Filter>;
	contract_contains?: InputMaybe<Scalars['String']>;
	contract_contains_nocase?: InputMaybe<Scalars['String']>;
	contract_ends_with?: InputMaybe<Scalars['String']>;
	contract_ends_with_nocase?: InputMaybe<Scalars['String']>;
	contract_gt?: InputMaybe<Scalars['String']>;
	contract_gte?: InputMaybe<Scalars['String']>;
	contract_in?: InputMaybe<Array<Scalars['String']>>;
	contract_lt?: InputMaybe<Scalars['String']>;
	contract_lte?: InputMaybe<Scalars['String']>;
	contract_not?: InputMaybe<Scalars['String']>;
	contract_not_contains?: InputMaybe<Scalars['String']>;
	contract_not_contains_nocase?: InputMaybe<Scalars['String']>;
	contract_not_ends_with?: InputMaybe<Scalars['String']>;
	contract_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	contract_not_in?: InputMaybe<Array<Scalars['String']>>;
	contract_not_starts_with?: InputMaybe<Scalars['String']>;
	contract_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	contract_starts_with?: InputMaybe<Scalars['String']>;
	contract_starts_with_nocase?: InputMaybe<Scalars['String']>;
	emitter?: InputMaybe<Scalars['String']>;
	emitter_?: InputMaybe<Account_Filter>;
	emitter_contains?: InputMaybe<Scalars['String']>;
	emitter_contains_nocase?: InputMaybe<Scalars['String']>;
	emitter_ends_with?: InputMaybe<Scalars['String']>;
	emitter_ends_with_nocase?: InputMaybe<Scalars['String']>;
	emitter_gt?: InputMaybe<Scalars['String']>;
	emitter_gte?: InputMaybe<Scalars['String']>;
	emitter_in?: InputMaybe<Array<Scalars['String']>>;
	emitter_lt?: InputMaybe<Scalars['String']>;
	emitter_lte?: InputMaybe<Scalars['String']>;
	emitter_not?: InputMaybe<Scalars['String']>;
	emitter_not_contains?: InputMaybe<Scalars['String']>;
	emitter_not_contains_nocase?: InputMaybe<Scalars['String']>;
	emitter_not_ends_with?: InputMaybe<Scalars['String']>;
	emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	emitter_not_in?: InputMaybe<Array<Scalars['String']>>;
	emitter_not_starts_with?: InputMaybe<Scalars['String']>;
	emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	emitter_starts_with?: InputMaybe<Scalars['String']>;
	emitter_starts_with_nocase?: InputMaybe<Scalars['String']>;
	from?: InputMaybe<Scalars['String']>;
	from_?: InputMaybe<Account_Filter>;
	from_contains?: InputMaybe<Scalars['String']>;
	from_contains_nocase?: InputMaybe<Scalars['String']>;
	from_ends_with?: InputMaybe<Scalars['String']>;
	from_ends_with_nocase?: InputMaybe<Scalars['String']>;
	from_gt?: InputMaybe<Scalars['String']>;
	from_gte?: InputMaybe<Scalars['String']>;
	from_in?: InputMaybe<Array<Scalars['String']>>;
	from_lt?: InputMaybe<Scalars['String']>;
	from_lte?: InputMaybe<Scalars['String']>;
	from_not?: InputMaybe<Scalars['String']>;
	from_not_contains?: InputMaybe<Scalars['String']>;
	from_not_contains_nocase?: InputMaybe<Scalars['String']>;
	from_not_ends_with?: InputMaybe<Scalars['String']>;
	from_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	from_not_in?: InputMaybe<Array<Scalars['String']>>;
	from_not_starts_with?: InputMaybe<Scalars['String']>;
	from_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	from_starts_with?: InputMaybe<Scalars['String']>;
	from_starts_with_nocase?: InputMaybe<Scalars['String']>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	timestamp?: InputMaybe<Scalars['BigInt']>;
	timestamp_gt?: InputMaybe<Scalars['BigInt']>;
	timestamp_gte?: InputMaybe<Scalars['BigInt']>;
	timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
	timestamp_lt?: InputMaybe<Scalars['BigInt']>;
	timestamp_lte?: InputMaybe<Scalars['BigInt']>;
	timestamp_not?: InputMaybe<Scalars['BigInt']>;
	timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	to?: InputMaybe<Scalars['String']>;
	to_?: InputMaybe<Account_Filter>;
	to_contains?: InputMaybe<Scalars['String']>;
	to_contains_nocase?: InputMaybe<Scalars['String']>;
	to_ends_with?: InputMaybe<Scalars['String']>;
	to_ends_with_nocase?: InputMaybe<Scalars['String']>;
	to_gt?: InputMaybe<Scalars['String']>;
	to_gte?: InputMaybe<Scalars['String']>;
	to_in?: InputMaybe<Array<Scalars['String']>>;
	to_lt?: InputMaybe<Scalars['String']>;
	to_lte?: InputMaybe<Scalars['String']>;
	to_not?: InputMaybe<Scalars['String']>;
	to_not_contains?: InputMaybe<Scalars['String']>;
	to_not_contains_nocase?: InputMaybe<Scalars['String']>;
	to_not_ends_with?: InputMaybe<Scalars['String']>;
	to_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	to_not_in?: InputMaybe<Array<Scalars['String']>>;
	to_not_starts_with?: InputMaybe<Scalars['String']>;
	to_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	to_starts_with?: InputMaybe<Scalars['String']>;
	to_starts_with_nocase?: InputMaybe<Scalars['String']>;
	token?: InputMaybe<Scalars['String']>;
	token_?: InputMaybe<Erc721Token_Filter>;
	token_contains?: InputMaybe<Scalars['String']>;
	token_contains_nocase?: InputMaybe<Scalars['String']>;
	token_ends_with?: InputMaybe<Scalars['String']>;
	token_ends_with_nocase?: InputMaybe<Scalars['String']>;
	token_gt?: InputMaybe<Scalars['String']>;
	token_gte?: InputMaybe<Scalars['String']>;
	token_in?: InputMaybe<Array<Scalars['String']>>;
	token_lt?: InputMaybe<Scalars['String']>;
	token_lte?: InputMaybe<Scalars['String']>;
	token_not?: InputMaybe<Scalars['String']>;
	token_not_contains?: InputMaybe<Scalars['String']>;
	token_not_contains_nocase?: InputMaybe<Scalars['String']>;
	token_not_ends_with?: InputMaybe<Scalars['String']>;
	token_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	token_not_in?: InputMaybe<Array<Scalars['String']>>;
	token_not_starts_with?: InputMaybe<Scalars['String']>;
	token_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	token_starts_with?: InputMaybe<Scalars['String']>;
	token_starts_with_nocase?: InputMaybe<Scalars['String']>;
	transaction?: InputMaybe<Scalars['String']>;
	transaction_?: InputMaybe<Transaction_Filter>;
	transaction_contains?: InputMaybe<Scalars['String']>;
	transaction_contains_nocase?: InputMaybe<Scalars['String']>;
	transaction_ends_with?: InputMaybe<Scalars['String']>;
	transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
	transaction_gt?: InputMaybe<Scalars['String']>;
	transaction_gte?: InputMaybe<Scalars['String']>;
	transaction_in?: InputMaybe<Array<Scalars['String']>>;
	transaction_lt?: InputMaybe<Scalars['String']>;
	transaction_lte?: InputMaybe<Scalars['String']>;
	transaction_not?: InputMaybe<Scalars['String']>;
	transaction_not_contains?: InputMaybe<Scalars['String']>;
	transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
	transaction_not_ends_with?: InputMaybe<Scalars['String']>;
	transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
	transaction_not_starts_with?: InputMaybe<Scalars['String']>;
	transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	transaction_starts_with?: InputMaybe<Scalars['String']>;
	transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export type Erc721Transfer_OrderBy = 'contract' | 'emitter' | 'from' | 'id' | 'timestamp' | 'to' | 'token' | 'transaction';

export interface Event {
	emitter: Account;
	timestamp: Scalars['BigInt'];
	transaction: Transaction;
}

export interface Event_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	emitter?: InputMaybe<Scalars['String']>;
	emitter_?: InputMaybe<Account_Filter>;
	emitter_contains?: InputMaybe<Scalars['String']>;
	emitter_contains_nocase?: InputMaybe<Scalars['String']>;
	emitter_ends_with?: InputMaybe<Scalars['String']>;
	emitter_ends_with_nocase?: InputMaybe<Scalars['String']>;
	emitter_gt?: InputMaybe<Scalars['String']>;
	emitter_gte?: InputMaybe<Scalars['String']>;
	emitter_in?: InputMaybe<Array<Scalars['String']>>;
	emitter_lt?: InputMaybe<Scalars['String']>;
	emitter_lte?: InputMaybe<Scalars['String']>;
	emitter_not?: InputMaybe<Scalars['String']>;
	emitter_not_contains?: InputMaybe<Scalars['String']>;
	emitter_not_contains_nocase?: InputMaybe<Scalars['String']>;
	emitter_not_ends_with?: InputMaybe<Scalars['String']>;
	emitter_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	emitter_not_in?: InputMaybe<Array<Scalars['String']>>;
	emitter_not_starts_with?: InputMaybe<Scalars['String']>;
	emitter_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	emitter_starts_with?: InputMaybe<Scalars['String']>;
	emitter_starts_with_nocase?: InputMaybe<Scalars['String']>;
	timestamp?: InputMaybe<Scalars['BigInt']>;
	timestamp_gt?: InputMaybe<Scalars['BigInt']>;
	timestamp_gte?: InputMaybe<Scalars['BigInt']>;
	timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
	timestamp_lt?: InputMaybe<Scalars['BigInt']>;
	timestamp_lte?: InputMaybe<Scalars['BigInt']>;
	timestamp_not?: InputMaybe<Scalars['BigInt']>;
	timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	transaction?: InputMaybe<Scalars['String']>;
	transaction_?: InputMaybe<Transaction_Filter>;
	transaction_contains?: InputMaybe<Scalars['String']>;
	transaction_contains_nocase?: InputMaybe<Scalars['String']>;
	transaction_ends_with?: InputMaybe<Scalars['String']>;
	transaction_ends_with_nocase?: InputMaybe<Scalars['String']>;
	transaction_gt?: InputMaybe<Scalars['String']>;
	transaction_gte?: InputMaybe<Scalars['String']>;
	transaction_in?: InputMaybe<Array<Scalars['String']>>;
	transaction_lt?: InputMaybe<Scalars['String']>;
	transaction_lte?: InputMaybe<Scalars['String']>;
	transaction_not?: InputMaybe<Scalars['String']>;
	transaction_not_contains?: InputMaybe<Scalars['String']>;
	transaction_not_contains_nocase?: InputMaybe<Scalars['String']>;
	transaction_not_ends_with?: InputMaybe<Scalars['String']>;
	transaction_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	transaction_not_in?: InputMaybe<Array<Scalars['String']>>;
	transaction_not_starts_with?: InputMaybe<Scalars['String']>;
	transaction_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	transaction_starts_with?: InputMaybe<Scalars['String']>;
	transaction_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export type Event_OrderBy = 'emitter' | 'timestamp' | 'transaction';

export interface Goobal {
	__typename: 'Goobal';
	/**  Address of the Art Gobblers ERC721 contract  */
	artGobblers: Scalars['Bytes'];
	g: Scalars['BigInt'];
	gobblers: Scalars['Int'];
	/**  Address of the GOO contract  */
	goo: Scalars['Bytes'];
	goobblers: Array<Scalars['Bytes']>;
	id: Scalars['ID'];
	/**
	 * "Q" is the sum of all multipliers of all gobblers
	 *
	 */
	q: Scalars['BigInt'];
	qced: Array<Scalars['Int']>;
}

export interface Goobal_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	artGobblers?: InputMaybe<Scalars['Bytes']>;
	artGobblers_contains?: InputMaybe<Scalars['Bytes']>;
	artGobblers_in?: InputMaybe<Array<Scalars['Bytes']>>;
	artGobblers_not?: InputMaybe<Scalars['Bytes']>;
	artGobblers_not_contains?: InputMaybe<Scalars['Bytes']>;
	artGobblers_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	g?: InputMaybe<Scalars['BigInt']>;
	g_gt?: InputMaybe<Scalars['BigInt']>;
	g_gte?: InputMaybe<Scalars['BigInt']>;
	g_in?: InputMaybe<Array<Scalars['BigInt']>>;
	g_lt?: InputMaybe<Scalars['BigInt']>;
	g_lte?: InputMaybe<Scalars['BigInt']>;
	g_not?: InputMaybe<Scalars['BigInt']>;
	g_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gobblers?: InputMaybe<Scalars['Int']>;
	gobblers_gt?: InputMaybe<Scalars['Int']>;
	gobblers_gte?: InputMaybe<Scalars['Int']>;
	gobblers_in?: InputMaybe<Array<Scalars['Int']>>;
	gobblers_lt?: InputMaybe<Scalars['Int']>;
	gobblers_lte?: InputMaybe<Scalars['Int']>;
	gobblers_not?: InputMaybe<Scalars['Int']>;
	gobblers_not_in?: InputMaybe<Array<Scalars['Int']>>;
	goo?: InputMaybe<Scalars['Bytes']>;
	goo_contains?: InputMaybe<Scalars['Bytes']>;
	goo_in?: InputMaybe<Array<Scalars['Bytes']>>;
	goo_not?: InputMaybe<Scalars['Bytes']>;
	goo_not_contains?: InputMaybe<Scalars['Bytes']>;
	goo_not_in?: InputMaybe<Array<Scalars['Bytes']>>;
	goobblers?: InputMaybe<Array<Scalars['Bytes']>>;
	goobblers_contains?: InputMaybe<Array<Scalars['Bytes']>>;
	goobblers_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
	goobblers_not?: InputMaybe<Array<Scalars['Bytes']>>;
	goobblers_not_contains?: InputMaybe<Array<Scalars['Bytes']>>;
	goobblers_not_contains_nocase?: InputMaybe<Array<Scalars['Bytes']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	q?: InputMaybe<Scalars['BigInt']>;
	q_gt?: InputMaybe<Scalars['BigInt']>;
	q_gte?: InputMaybe<Scalars['BigInt']>;
	q_in?: InputMaybe<Array<Scalars['BigInt']>>;
	q_lt?: InputMaybe<Scalars['BigInt']>;
	q_lte?: InputMaybe<Scalars['BigInt']>;
	q_not?: InputMaybe<Scalars['BigInt']>;
	q_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	qced?: InputMaybe<Array<Scalars['Int']>>;
	qced_contains?: InputMaybe<Array<Scalars['Int']>>;
	qced_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
	qced_not?: InputMaybe<Array<Scalars['Int']>>;
	qced_not_contains?: InputMaybe<Array<Scalars['Int']>>;
	qced_not_contains_nocase?: InputMaybe<Array<Scalars['Int']>>;
}

export type Goobal_OrderBy = 'artGobblers' | 'g' | 'gobblers' | 'goo' | 'goobblers' | 'id' | 'q' | 'qced';

export interface Goobbler {
	__typename: 'Goobbler';
	gooBalance: Scalars['BigInt'];
	id: Scalars['ID'];
}

export interface Goobbler_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	gooBalance?: InputMaybe<Scalars['BigInt']>;
	gooBalance_gt?: InputMaybe<Scalars['BigInt']>;
	gooBalance_gte?: InputMaybe<Scalars['BigInt']>;
	gooBalance_in?: InputMaybe<Array<Scalars['BigInt']>>;
	gooBalance_lt?: InputMaybe<Scalars['BigInt']>;
	gooBalance_lte?: InputMaybe<Scalars['BigInt']>;
	gooBalance_not?: InputMaybe<Scalars['BigInt']>;
	gooBalance_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
}

export type Goobbler_OrderBy = 'gooBalance' | 'id';

export interface Goober {
	__typename: 'Goober';
	balances?: Maybe<Array<GooberBalance>>;
	id: Scalars['ID'];
}

export interface GooberBalancesArgs {
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GooberBalance_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	where?: InputMaybe<GooberBalance_Filter>;
}

export interface GooberBalance {
	__typename: 'GooberBalance';
	balance: Scalars['BigDecimal'];
	id: Scalars['ID'];
	userAddress: User;
}

export interface GooberBalance_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	balance?: InputMaybe<Scalars['BigDecimal']>;
	balance_gt?: InputMaybe<Scalars['BigDecimal']>;
	balance_gte?: InputMaybe<Scalars['BigDecimal']>;
	balance_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	balance_lt?: InputMaybe<Scalars['BigDecimal']>;
	balance_lte?: InputMaybe<Scalars['BigDecimal']>;
	balance_not?: InputMaybe<Scalars['BigDecimal']>;
	balance_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	userAddress?: InputMaybe<Scalars['String']>;
	userAddress_?: InputMaybe<User_Filter>;
	userAddress_contains?: InputMaybe<Scalars['String']>;
	userAddress_contains_nocase?: InputMaybe<Scalars['String']>;
	userAddress_ends_with?: InputMaybe<Scalars['String']>;
	userAddress_ends_with_nocase?: InputMaybe<Scalars['String']>;
	userAddress_gt?: InputMaybe<Scalars['String']>;
	userAddress_gte?: InputMaybe<Scalars['String']>;
	userAddress_in?: InputMaybe<Array<Scalars['String']>>;
	userAddress_lt?: InputMaybe<Scalars['String']>;
	userAddress_lte?: InputMaybe<Scalars['String']>;
	userAddress_not?: InputMaybe<Scalars['String']>;
	userAddress_not_contains?: InputMaybe<Scalars['String']>;
	userAddress_not_contains_nocase?: InputMaybe<Scalars['String']>;
	userAddress_not_ends_with?: InputMaybe<Scalars['String']>;
	userAddress_not_ends_with_nocase?: InputMaybe<Scalars['String']>;
	userAddress_not_in?: InputMaybe<Array<Scalars['String']>>;
	userAddress_not_starts_with?: InputMaybe<Scalars['String']>;
	userAddress_not_starts_with_nocase?: InputMaybe<Scalars['String']>;
	userAddress_starts_with?: InputMaybe<Scalars['String']>;
	userAddress_starts_with_nocase?: InputMaybe<Scalars['String']>;
}

export type GooberBalance_OrderBy = 'balance' | 'id' | 'userAddress';

export interface GooberDayData {
	__typename: 'GooberDayData';
	date: Scalars['Int'];
	id: Scalars['ID'];
	kDelta: Scalars['BigDecimal'];
}

export interface GooberDayData_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	date?: InputMaybe<Scalars['Int']>;
	date_gt?: InputMaybe<Scalars['Int']>;
	date_gte?: InputMaybe<Scalars['Int']>;
	date_in?: InputMaybe<Array<Scalars['Int']>>;
	date_lt?: InputMaybe<Scalars['Int']>;
	date_lte?: InputMaybe<Scalars['Int']>;
	date_not?: InputMaybe<Scalars['Int']>;
	date_not_in?: InputMaybe<Array<Scalars['Int']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	kDelta?: InputMaybe<Scalars['BigDecimal']>;
	kDelta_gt?: InputMaybe<Scalars['BigDecimal']>;
	kDelta_gte?: InputMaybe<Scalars['BigDecimal']>;
	kDelta_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
	kDelta_lt?: InputMaybe<Scalars['BigDecimal']>;
	kDelta_lte?: InputMaybe<Scalars['BigDecimal']>;
	kDelta_not?: InputMaybe<Scalars['BigDecimal']>;
	kDelta_not_in?: InputMaybe<Array<Scalars['BigDecimal']>>;
}

export type GooberDayData_OrderBy = 'date' | 'id' | 'kDelta';

export interface Goober_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	balances?: InputMaybe<Array<Scalars['String']>>;
	balances_?: InputMaybe<GooberBalance_Filter>;
	balances_contains?: InputMaybe<Array<Scalars['String']>>;
	balances_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
	balances_not?: InputMaybe<Array<Scalars['String']>>;
	balances_not_contains?: InputMaybe<Array<Scalars['String']>>;
	balances_not_contains_nocase?: InputMaybe<Array<Scalars['String']>>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
}

export type Goober_OrderBy = 'balances' | 'id';

/** Defines the order direction, either ascending or descending */
export type OrderDirection = 'asc' | 'desc';

export interface Query {
	__typename: 'Query';
	/** Access to subgraph metadata */
	_meta?: Maybe<_Meta_>;
	account?: Maybe<Account>;
	accounts: Array<Account>;
	erc721Contract?: Maybe<Erc721Contract>;
	erc721Contracts: Array<Erc721Contract>;
	erc721Operator?: Maybe<Erc721Operator>;
	erc721Operators: Array<Erc721Operator>;
	erc721Token?: Maybe<Erc721Token>;
	erc721Tokens: Array<Erc721Token>;
	erc721Transfer?: Maybe<Erc721Transfer>;
	erc721Transfers: Array<Erc721Transfer>;
	event?: Maybe<Event>;
	events: Array<Event>;
	goobal?: Maybe<Goobal>;
	goobals: Array<Goobal>;
	goobbler?: Maybe<Goobbler>;
	goobblers: Array<Goobbler>;
	goober?: Maybe<Goober>;
	gooberBalance?: Maybe<GooberBalance>;
	gooberBalances: Array<GooberBalance>;
	gooberDayData?: Maybe<GooberDayData>;
	gooberDayDatas: Array<GooberDayData>;
	goobers: Array<Goober>;
	transaction?: Maybe<Transaction>;
	transactions: Array<Transaction>;
	user?: Maybe<User>;
	users: Array<User>;
}

export interface Query_MetaArgs {
	block?: InputMaybe<Block_Height>;
}

export interface QueryAccountArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryAccountsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Account_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Account_Filter>;
}

export interface QueryErc721ContractArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryErc721ContractsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Erc721Contract_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Erc721Contract_Filter>;
}

export interface QueryErc721OperatorArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryErc721OperatorsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Erc721Operator_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Erc721Operator_Filter>;
}

export interface QueryErc721TokenArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryErc721TokensArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Erc721Token_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Erc721Token_Filter>;
}

export interface QueryErc721TransferArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryErc721TransfersArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Erc721Transfer_Filter>;
}

export interface QueryEventArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryEventsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Event_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Event_Filter>;
}

export interface QueryGoobalArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGoobalsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Goobal_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Goobal_Filter>;
}

export interface QueryGoobblerArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGoobblersArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Goobbler_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Goobbler_Filter>;
}

export interface QueryGooberArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGooberBalanceArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGooberBalancesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GooberBalance_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GooberBalance_Filter>;
}

export interface QueryGooberDayDataArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryGooberDayDatasArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GooberDayData_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GooberDayData_Filter>;
}

export interface QueryGoobersArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Goober_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Goober_Filter>;
}

export interface QueryTransactionArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryTransactionsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Transaction_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Transaction_Filter>;
}

export interface QueryUserArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface QueryUsersArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<User_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<User_Filter>;
}

export interface Subscription {
	__typename: 'Subscription';
	/** Access to subgraph metadata */
	_meta?: Maybe<_Meta_>;
	account?: Maybe<Account>;
	accounts: Array<Account>;
	erc721Contract?: Maybe<Erc721Contract>;
	erc721Contracts: Array<Erc721Contract>;
	erc721Operator?: Maybe<Erc721Operator>;
	erc721Operators: Array<Erc721Operator>;
	erc721Token?: Maybe<Erc721Token>;
	erc721Tokens: Array<Erc721Token>;
	erc721Transfer?: Maybe<Erc721Transfer>;
	erc721Transfers: Array<Erc721Transfer>;
	event?: Maybe<Event>;
	events: Array<Event>;
	goobal?: Maybe<Goobal>;
	goobals: Array<Goobal>;
	goobbler?: Maybe<Goobbler>;
	goobblers: Array<Goobbler>;
	goober?: Maybe<Goober>;
	gooberBalance?: Maybe<GooberBalance>;
	gooberBalances: Array<GooberBalance>;
	gooberDayData?: Maybe<GooberDayData>;
	gooberDayDatas: Array<GooberDayData>;
	goobers: Array<Goober>;
	transaction?: Maybe<Transaction>;
	transactions: Array<Transaction>;
	user?: Maybe<User>;
	users: Array<User>;
}

export interface Subscription_MetaArgs {
	block?: InputMaybe<Block_Height>;
}

export interface SubscriptionAccountArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionAccountsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Account_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Account_Filter>;
}

export interface SubscriptionErc721ContractArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionErc721ContractsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Erc721Contract_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Erc721Contract_Filter>;
}

export interface SubscriptionErc721OperatorArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionErc721OperatorsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Erc721Operator_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Erc721Operator_Filter>;
}

export interface SubscriptionErc721TokenArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionErc721TokensArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Erc721Token_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Erc721Token_Filter>;
}

export interface SubscriptionErc721TransferArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionErc721TransfersArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Erc721Transfer_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Erc721Transfer_Filter>;
}

export interface SubscriptionEventArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionEventsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Event_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Event_Filter>;
}

export interface SubscriptionGoobalArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGoobalsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Goobal_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Goobal_Filter>;
}

export interface SubscriptionGoobblerArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGoobblersArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Goobbler_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Goobbler_Filter>;
}

export interface SubscriptionGooberArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGooberBalanceArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGooberBalancesArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GooberBalance_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GooberBalance_Filter>;
}

export interface SubscriptionGooberDayDataArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionGooberDayDatasArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<GooberDayData_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<GooberDayData_Filter>;
}

export interface SubscriptionGoobersArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Goober_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Goober_Filter>;
}

export interface SubscriptionTransactionArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionTransactionsArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<Transaction_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<Transaction_Filter>;
}

export interface SubscriptionUserArgs {
	block?: InputMaybe<Block_Height>;
	id: Scalars['ID'];
	subgraphError?: _SubgraphErrorPolicy_;
}

export interface SubscriptionUsersArgs {
	block?: InputMaybe<Block_Height>;
	first?: InputMaybe<Scalars['Int']>;
	orderBy?: InputMaybe<User_OrderBy>;
	orderDirection?: InputMaybe<OrderDirection>;
	skip?: InputMaybe<Scalars['Int']>;
	subgraphError?: _SubgraphErrorPolicy_;
	where?: InputMaybe<User_Filter>;
}

export interface Transaction {
	__typename: 'Transaction';
	blockNumber: Scalars['BigInt'];
	events: Event;
	id: Scalars['ID'];
	timestamp: Scalars['BigInt'];
}

export interface Transaction_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	blockNumber?: InputMaybe<Scalars['BigInt']>;
	blockNumber_gt?: InputMaybe<Scalars['BigInt']>;
	blockNumber_gte?: InputMaybe<Scalars['BigInt']>;
	blockNumber_in?: InputMaybe<Array<Scalars['BigInt']>>;
	blockNumber_lt?: InputMaybe<Scalars['BigInt']>;
	blockNumber_lte?: InputMaybe<Scalars['BigInt']>;
	blockNumber_not?: InputMaybe<Scalars['BigInt']>;
	blockNumber_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
	events_?: InputMaybe<Event_Filter>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
	timestamp?: InputMaybe<Scalars['BigInt']>;
	timestamp_gt?: InputMaybe<Scalars['BigInt']>;
	timestamp_gte?: InputMaybe<Scalars['BigInt']>;
	timestamp_in?: InputMaybe<Array<Scalars['BigInt']>>;
	timestamp_lt?: InputMaybe<Scalars['BigInt']>;
	timestamp_lte?: InputMaybe<Scalars['BigInt']>;
	timestamp_not?: InputMaybe<Scalars['BigInt']>;
	timestamp_not_in?: InputMaybe<Array<Scalars['BigInt']>>;
}

export type Transaction_OrderBy = 'blockNumber' | 'events' | 'id' | 'timestamp';

export interface User {
	__typename: 'User';
	id: Scalars['ID'];
}

export interface User_Filter {
	/** Filter for the block changed event. */
	_change_block?: InputMaybe<BlockChangedFilter>;
	id?: InputMaybe<Scalars['ID']>;
	id_gt?: InputMaybe<Scalars['ID']>;
	id_gte?: InputMaybe<Scalars['ID']>;
	id_in?: InputMaybe<Array<Scalars['ID']>>;
	id_lt?: InputMaybe<Scalars['ID']>;
	id_lte?: InputMaybe<Scalars['ID']>;
	id_not?: InputMaybe<Scalars['ID']>;
	id_not_in?: InputMaybe<Array<Scalars['ID']>>;
}

export type User_OrderBy = 'id';

export interface _Block_ {
	__typename: '_Block_';
	/** The hash of the block */
	hash?: Maybe<Scalars['Bytes']>;
	/** The block number */
	number: Scalars['Int'];
	/** Integer representation of the timestamp stored in blocks for the chain */
	timestamp?: Maybe<Scalars['Int']>;
}

/** The type for the top-level _meta field */
export interface _Meta_ {
	__typename: '_Meta_';
	/**
	 * Information about a specific subgraph block. The hash of the block
	 * will be null if the _meta field has a block constraint that asks for
	 * a block number. It will be filled if the _meta field has no block constraint
	 * and therefore asks for the latest  block
	 *
	 */
	block: _Block_;
	/** The deployment ID */
	deployment: Scalars['String'];
	/** If `true`, the subgraph encountered indexing errors at some past block */
	hasIndexingErrors: Scalars['Boolean'];
}

export type _SubgraphErrorPolicy_ =
	/** Data will be returned even if the subgraph has indexing errors */
	| 'allow'
	/** If the subgraph has indexing errors, data will be omitted. The default. */
	| 'deny';

export type GetTopGooberBalancesQueryVariables = Exact<{ [key: string]: never }>;

export type GetTopGooberBalancesQuery = { __typename: 'Query'; gooberBalances: Array<{ __typename: 'GooberBalance'; id: string; balance: string }> };

export type GetGooberDayDataQueryVariables = Exact<{ [key: string]: never }>;

export type GetGooberDayDataQuery = {
	__typename: 'Query';
	gooberDayDatas: Array<{ __typename: 'GooberDayData'; id: string; date: number; kDelta: string }>;
};

export const GetTopGooberBalancesDocument = `
    query GetTopGooberBalances {
  gooberBalances(orderBy: balance, orderDirection: desc, first: 12) {
    id
    balance
  }
}
    `;
export const useGetTopGooberBalancesQuery = <TData = GetTopGooberBalancesQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables?: GetTopGooberBalancesQueryVariables,
	options?: UseQueryOptions<GetTopGooberBalancesQuery, TError, TData>
) =>
	useQuery<GetTopGooberBalancesQuery, TError, TData>(
		variables === undefined ? ['GetTopGooberBalances'] : ['GetTopGooberBalances', variables],
		fetcher<GetTopGooberBalancesQuery, GetTopGooberBalancesQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			GetTopGooberBalancesDocument,
			variables
		),
		options
	);
export const GetGooberDayDataDocument = `
    query GetGooberDayData {
  gooberDayDatas(orderBy: date, orderDirection: desc) {
    id
    date
    kDelta
  }
}
    `;
export const useGetGooberDayDataQuery = <TData = GetGooberDayDataQuery, TError = unknown>(
	dataSource: { endpoint: string; fetchParams?: RequestInit },
	variables?: GetGooberDayDataQueryVariables,
	options?: UseQueryOptions<GetGooberDayDataQuery, TError, TData>
) =>
	useQuery<GetGooberDayDataQuery, TError, TData>(
		variables === undefined ? ['GetGooberDayData'] : ['GetGooberDayData', variables],
		fetcher<GetGooberDayDataQuery, GetGooberDayDataQueryVariables>(
			dataSource.endpoint,
			dataSource.fetchParams || {},
			GetGooberDayDataDocument,
			variables
		),
		options
	);
export { fetcher };
