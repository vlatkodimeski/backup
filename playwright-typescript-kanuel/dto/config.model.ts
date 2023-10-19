export interface CreateUserDTO {
	site_id: number,
	site_code: string,
	email: string,
	phone_number: string,
	password: string,
	first_name: string,
	last_name: string,
	first_name_native: string,
	last_name_native: string,
	region: string,
	address: string,
	zip_code: string,
	city: string,
	gender: 'M' | 'F',
	national_id: string,
	birth_date: Date,
	country: string,
	currency: string,
	domain_id: number,
	tnc_accepted: boolean,
	privacy_policy_accepted: boolean,
	language: string,
	marketing_channels: MarketingChannels,
	timezone: string
}

export interface MarketingChannels {
	email: boolean,
	phone: boolean,
	postal: boolean,
	sms: boolean
}

export interface Credentials {
	site_id?: number;
	site_code?: string;
	phone_number?: string;
	email?: string;
	username?: string;
	password: string;
	playerToken?: string;
	playerId?: number;
	first_name?: string;
	first_name_native?: string;
	last_name?: string;
	last_name_native?: string;
	address?: string;
	zip_code?: string;
	city?: string;
	gender?: string;
	national_id?: string;
	birth_date?: string;
	country?: string;
	currency?: string;
	language?: string;

}

export interface projectConfig{
	siteID?: number; 
}

export class loginDTO {
	email: string;
	password: string;
	timezone: string;
}

