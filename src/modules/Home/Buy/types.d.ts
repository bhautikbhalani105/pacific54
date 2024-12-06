export interface DataType {
  key: string;
  address: string;
  beds: number;
  baths: number;
  capRate: number;
  daysOnMarket: number;
  daysToAuction: number;
  estimatedRent: number;
  estimatedValue: number;
  listingDate: number;
  listingPrice: number;
  pictures: string[];
  roi: number;
  sqFt: number;
  status: string;
  thumb: string;
}

export interface CompareDataType {
  key: string;
  address: string;
  salePrice: number;
  saleDate: number;
  distance: number;
  beds: number;
  baths: number;
  sqFt: number;
  lotSize: number;
  yearBuilt: number;
  source: string;
  edit?: string;
  delete?: string;
  thumb: string;
}

export interface BiddersType {
  key: string;
  bidder: string;
  lastActivity: number;
  highestBid: number;
  discountRate: number;
  estimatedBid: number;
}
