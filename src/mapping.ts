import { BigInt } from "@graphprotocol/graph-ts";
import {
  protoKol,
  CampaignCreated,
  CampaignDetailsUpdated,
  ClaimBackInvestment,
  ClaimKolInvestment,
  ClaimPreSaleTokens,
  DepositPreSaleTokens,
  InvestInCampaign,
  KOLAdded,
  SetMaxTGEAllowance,
  SetPenalty,
  StakingPercentageUpdated,
  TGEDeposited,
} from "../generated/protoKol/protoKol";
import {
  Campaign,
  Kol,
  KolInvestmentTransaction,
  User,
} from "../generated/schema";

export function handleCampaignCreated(event: CampaignCreated): void {
  let campaign = Campaign.load(event.params._campaign.campaignNumber.toHex());
  if (!campaign) {
    campaign = new Campaign(event.params._campaign.campaignNumber.toHex());
    campaign.CampaignId = event.params._campaign.campaignNumber;

    campaign.InvestmentClaimed =
      event.params._campaign.campaignData.investmentClaimed;

    campaign.PreSaleTokenBalance = new BigInt(0);

    campaign.ClaimBackInvestment =
      event.params._campaign.campaignData.claimBackInvestment;

    campaign.PreSaleToken = event.params._campaign.campaignData.preSaleToken;

    campaign.CampaignOwner = event.params._campaign.campaignData.campaignOwner;

    campaign.SecondOwner = event.params._campaign.campaignData.secondOwner;

    campaign.RequiredInvestment =
      event.params._campaign.campaignData.requiredInvestment;

    campaign.MarketingBudget =
      event.params._campaign.campaignData.marketingBudget;

    campaign.StartTime = event.params._campaign.campaignData.startTime;

    campaign.EndTime = event.params._campaign.campaignData.endTime;

    campaign.RemainingInvestment =
      event.params._campaign.campaignData.remainingInvestment;

    campaign.MaxInvest = event.params._campaign.campaignData.maxInvest;

    campaign.NumberOfPostsReq =
      event.params._campaign.campaignData.numberOfPostsReq;

    campaign.StakingAmount = event.params._campaign.campaignData.stakingAmount;

    campaign.IpfsHash = event.params._campaign.campaignData.ipfsHash;

    campaign.IsVestingInEnabled =
      event.params._campaign.vestingData.isVestingInEnabled;

    campaign.NumberOfvestings =
      event.params._campaign.vestingData.NumberOfvestings;

    campaign.VestingCycleDuration =
      event.params._campaign.vestingData.vestingCycleDuration;

    campaign.VestingAmtPerCycle =
      event.params._campaign.vestingData.vestingAmtPerCycle;

    campaign.IsTGE = event.params._campaign.tgeDetails.isTGE;

    campaign.TgePercentage = BigInt.fromI32(
      event.params._campaign.tgeDetails.tgePercentage
    );

    campaign.TgeTime = event.params._campaign.tgeDetails.tgeTime;

    campaign.TgeAmount = event.params._campaign.tgeDetails.tgeAmount;

    campaign.save();
  }

  let user = User.load(
    event.params._campaign.campaignData.campaignOwner.toHex()
  );
  if (!user) {
    user = new User(event.params._campaign.campaignData.campaignOwner.toHex());
    user.WalletAddress = event.params._campaign.campaignData.campaignOwner;
    user.Role = "project";
    user.save();
  }

  // Note: If a handler doesn't require existing field values, it is faster
  // _not_ to load the entity from the store. Instead, create it fresh with
  // `new Entity(...)`, set the fields that should be updated and save the
  // entity back to the store. Fields that were not set or unset remain
  // unchanged, allowing for partial updates to be applied.

  // It is also possible to access smart contracts from mappings. For
  // example, the contract that has emitted the event can be connected to
  // with:
  //
  // let contract = Contract.bind(event.address)
  //
  // The following functions can then be called on this contract to access
  // state variables and other data:
  //
  // - contract._penalty_per(...)
  // - contract.blackListedKOL(...)
  // - contract.campaigns(...)
  // - contract.claimKOLInvestment(...)
  // - contract.claimPreSaleTokens(...)
  // - contract.createCampaign(...)
  // - contract.depositPreSaleTokens(...)
  // - contract.generateTGE(...)
  // - contract.getInvestedCampaigns(...)
  // - contract.getKolInvestedCampaigns(...)
  // - contract.investInCampaign(...)
  // - contract.investedCapmaignDetails(...)
  // - contract.kolInvestDetails(...)
  // - contract.recSig(...)
  // - contract.recoverSig(...)
  // - contract.registerKOL(...)
  // - contract.retriveCampaign(...)
  // - contract.retriveKOL(...)
  // - contract.setStakingPercentage(...)
  // - contract.splitSign(...)
  // - contract.tgeUpdated(...)
  // - contract.updateCampaign(...)
}

export function handleCampaignDetailsUpdated(
  event: CampaignDetailsUpdated
): void {
  let campaign = Campaign.load(
    event.params._newCampaign.campaignNumber.toHex()
  );
  if (campaign) {
    campaign.CampaignId = event.params._newCampaign.campaignNumber;

    campaign.InvestmentClaimed =
      event.params._newCampaign.campaignData.investmentClaimed;

    campaign.ClaimBackInvestment =
      event.params._newCampaign.campaignData.claimBackInvestment;

    campaign.PreSaleToken = event.params._newCampaign.campaignData.preSaleToken;

    campaign.CampaignOwner =
      event.params._newCampaign.campaignData.campaignOwner;

    campaign.SecondOwner = event.params._newCampaign.campaignData.secondOwner;

    campaign.RequiredInvestment =
      event.params._newCampaign.campaignData.requiredInvestment;

    campaign.MarketingBudget =
      event.params._newCampaign.campaignData.marketingBudget;

    campaign.StartTime = event.params._newCampaign.campaignData.startTime;

    campaign.EndTime = event.params._newCampaign.campaignData.endTime;

    campaign.RemainingInvestment =
      event.params._newCampaign.campaignData.remainingInvestment;

    campaign.MaxInvest = event.params._newCampaign.campaignData.maxInvest;

    campaign.NumberOfPostsReq =
      event.params._newCampaign.campaignData.numberOfPostsReq;

    campaign.StakingAmount =
      event.params._newCampaign.campaignData.stakingAmount;

    campaign.IpfsHash = event.params._newCampaign.campaignData.ipfsHash;

    campaign.IsVestingInEnabled =
      event.params._newCampaign.vestingData.isVestingInEnabled;

    campaign.NumberOfvestings =
      event.params._newCampaign.vestingData.NumberOfvestings;

    campaign.VestingCycleDuration =
      event.params._newCampaign.vestingData.vestingCycleDuration;

    campaign.VestingAmtPerCycle =
      event.params._newCampaign.vestingData.vestingAmtPerCycle;

    campaign.IsTGE = event.params._newCampaign.tgeDetails.isTGE;

    campaign.TgePercentage = BigInt.fromI32(
      event.params._newCampaign.tgeDetails.tgePercentage
    );

    campaign.TgeTime = event.params._newCampaign.tgeDetails.tgeTime;

    campaign.TgeAmount = event.params._newCampaign.tgeDetails.tgeAmount;

    campaign.save();
  }
}

export function handleClaimBackInvestment(event: ClaimBackInvestment): void {}

export function handleClaimKolInvestment(event: ClaimKolInvestment): void {}

export function handleClaimPreSaleTokens(event: ClaimPreSaleTokens): void {}

export function handleDepositPreSaleTokens(event: DepositPreSaleTokens): void {
  let campaign = Campaign.load(event.params.campaign_Id.toHex());
  if (!campaign) {
    campaign = new Campaign(event.params.campaign_Id.toHex());
  }

  campaign.PreSaleTokenBalance = campaign.PreSaleTokenBalance.plus(
    event.params._amount
  );

  campaign.save();
}

export function handleInvestInCampaign(event: InvestInCampaign): void {
  let kol = Kol.load(event.params._kol.toHex());

  if (!kol) {
    kol = new Kol(event.params._kol.toHex());
  }

  let campaign = Campaign.load(event.params.campaign_Id.toHex());
  if (!campaign) {
    campaign = new Campaign(event.params.campaign_Id.toHex());
  }

  let kolInvestment = new KolInvestmentTransaction(
    event.transaction.hash.toHex() + "-" + event.logIndex.toString()
  );

  kolInvestment.CampaignId = event.params.campaign_Id;

  kolInvestment.KolAddress = event.params._kol;

  kol.TotalInvestedAmount = kol.TotalInvestedAmount.plus(event.params._amount);

  kolInvestment.InvestmentShare = event.params._investmentShare;

  kolInvestment.Amount = event.params._amount;

  campaign.Kols = kol.id;

  kolInvestment.Kols = kol.id;

  campaign.save();
  kol.save();
  kolInvestment.save();
}

export function handleKOLAdded(event: KOLAdded): void {
  let kol = Kol.load(event.params._kol.kolWallet.toHex());
  if (!kol) {
    kol = new Kol(event.params._kol.kolWallet.toHex());

    kol.KolId = event.params._kol.kolID;

    kol.KolName = event.params._kol.name;

    kol.KolWalletAddress = event.params._kol.kolWallet;

    kol.TotalInvestedAmount = new BigInt(0);

    kol.IpfsHash = event.params._kol.ipfsHash;

    kol.save();
  }
  let user = User.load(event.params._kol.kolWallet.toHex());
  if (!user) {
    user = new User(event.params._kol.kolWallet.toHex());
    user.WalletAddress = event.params._kol.kolWallet;
    user.Role = "kol";
    user.save();
  }
}

export function handleSetMaxTGEAllowance(event: SetMaxTGEAllowance): void {}

export function handleSetPenalty(event: SetPenalty): void {}

export function handleStakingPercentageUpdated(
  event: StakingPercentageUpdated
): void {}

export function handleTGEDeposited(event: TGEDeposited): void {
  let campaign = Campaign.load(event.params._campaignID.toHex());
  if (campaign) {
    campaign.IsTGE = true;
    campaign.TgeAmount = event.params._tgeAmount;
    campaign.TgeTime = event.params._tgeTime;
    campaign.save();
  }
}
