// Represents the back end account DTO
export type AccountResponse = {
  id: number;
  accountType: string;
  accountNumber: string;
  status: string;
  balance: number;
  availableBalance?: number;
  apy?: number;
};
