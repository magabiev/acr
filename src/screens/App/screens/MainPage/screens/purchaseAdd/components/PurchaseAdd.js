import React, { useCallback, useState } from "react";
import {
  BlackBlock,
  PopUpContent,
  PopUp,
  Button,
  Spinner,
} from "../../../../../../shared/components/styled";
import { useDispatch, useSelector } from "react-redux";
import { purchaseAddToggled } from "../../../../../../../redux/ducks/application";
import {
  DebtPopUpName,
  PopUpDate,
  PopUpHeader,
} from "../../../../../../shared";
import PurchaseName from "./PurchaseName";
import PurchasePrice from "./PurchasePrice";
import PurchaseComment from "./PurchaseComment";
import { addedPurchase } from "../../../../../../../redux/ducks/purchases";
import { useParams } from "react-router-dom";
import dayjs from "dayjs";
import PurchaseAddNotification from "./PurchaseAddNotification";

function PurchaseAdd() {
  const opened = useParams().id;
  const dispatch = useDispatch();
  const purchaseAddShowToggle = () => {
    dispatch(purchaseAddToggled());
  };
  const [notification, setNotification] = useState(false);
  const [comment, setComment] = useState("");
  const handleComment = (e) => {
    setComment(e.target.value);
  };
  const purchaseAddShow = useSelector(
    (state) => state.application.purchaseAddShow
  );
  const adding = useSelector((state) => state.purchases.adding);
  const [name, setName] = useState("");
  const handleName = (e) => {
    setName(e.target.value);
  };
  const [price, setPrice] = useState("");
  const handlePrice = (e) => {
    setPrice(e.target.value);
  };
  const todayDate = dayjs().format("YYYY-MM-DD");
  const addPurchase = useCallback(() => {
    if (name.length && price.length) {
      dispatch(addedPurchase(name, opened, price, todayDate));
      setNotification(true);
      setPrice("");
      setName("");
      setComment("");
    }
  }, [dispatch, name, opened, price, todayDate]);

  return (
    <BlackBlock show={purchaseAddShow}>
      <PopUp>
        <PopUpContent>
          <div>
            <PurchaseAddNotification
              notification={notification}
              setN={setNotification}
            />
            <PopUpHeader handleClick={purchaseAddShowToggle} header="покупку" />
          </div>
          <div>
            <DebtPopUpName />
          </div>
          <div>
            <PurchaseName value={name} handleChange={handleName} />
            <PurchasePrice value={price} handleChange={handlePrice} />
          </div>
          <PurchaseComment value={comment} handleChange={handleComment} />
          <PopUpDate />
          <Button onClick={addPurchase} margin="auto">
            {adding && <Spinner />}
            Добавить
          </Button>
        </PopUpContent>
      </PopUp>
    </BlackBlock>
  );
}

export default PurchaseAdd;
