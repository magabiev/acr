const jsonServer = require("json-server");
const server = jsonServer.create();
const middlewares = jsonServer.defaults();

const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

server.use(middlewares);

const filterArrays = (filterArr, clientId) => {
  return filterArr.filter((item) => {
    return item.clientId === clientId;
  });
};

const payments = router.db.get("payments");
const purchases = router.db.get("purchases");
const clients = router.db.get("clients");

const paymentsBalances = clients.map((debtor) => {
  /** Суммирование всех покупок текущего клиента **/
  const purchasesFiltered = filterArrays(purchases, debtor.id);
  const purchasesTotalAmount = purchasesFiltered.reduce((total, purchase) => {
    return total + purchase.price;
  }, 0);
  /** Фильтрация платежей по текущему клиенту **/
  const paymentsFiltered = () => {
    let items = [];
    for (let purchase of purchasesFiltered) {
      const payment = payments.filter(
        (item) => item.purchaseId === purchase.id
      );
      items = [...items, ...payment];
    }
    return items;
  };
  /** Суммирование всех платежей текущего клиента **/
  const paymentsTotalAmount = paymentsFiltered().reduce((total, payment) => {
    return total + payment.amount;
  }, 0);
  return {
    clientId: debtor.id,
    paymentBalances: purchasesTotalAmount - paymentsTotalAmount,
  };
});
server.get("payments/clientId=:clientId", (req, res) => {});
server.get("/paymentsBalances", (req, res) => {
  return res.json(paymentsBalances);
});

server.get("/paymentsBalances/from=:from/to=:to", (req, res) => {
  const paymentsBalanceFilter = paymentsBalances.filter((item) => {
    if (Number(req.params.from) && Number(req.params.to)) {
      return (
        item.paymentBalances >= Number(req.params.from) &&
        Number(req.params.to) >= item.paymentBalances
      );
    } else if (Number(req.params.from)) {
      return item.paymentBalances >= Number(req.params.from);
    } else if (Number(req.params.to)) {
      return item.paymentBalances <= Number(req.params.to);
    }
    return item.paymentBalances;
  });

  const clientsFiltered = () => {
    return paymentsBalanceFilter.map((item) => {
      return clients.find((client) => client.id === item.clientId);
    });
  };

  return res.json(clientsFiltered());
});

server.use(router);

server.listen(3005, function () {
  console.log("JSON Server is running");
});
