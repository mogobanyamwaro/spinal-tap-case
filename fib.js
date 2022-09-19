const moneyDict = {
  PENNY: 1,
  NICKEL: 5,
  DIME: 10,
  QUARTER: 25,
  ONE: 100,
  FIVE: 500,
  TEN: 1000,
  TWENTY: 2000,
  "ONE HUNDRED": 10000,
};

function checkCashRegister(price, cash, cid) {
  let amtLeftTopay = Math.round((cash - price) * 100);
  let cidObje = cid.reduce((acc, [moneyType, amount]) => {
    return {
      ...acc,
      [moneyType]: Math.round(amount * 100),
    };
  }, {});
  return cidObje;
}
console.log(
  checkCashRegister(19.5, 20.0, [
    ["PENNY", 1.01],
    ["NICKEL", 2.05],
    ["DIME", 3.1],
    ["QUARTER", 4.25],
    ["ONE", 90.0],
    ["FIVE", 55.0],
    ["TEN", 20.0],
    ["TWENTY", 60.0],
    ["ONE HUNDRED", 100.0],
  ])
);
