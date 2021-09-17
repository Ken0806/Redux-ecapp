import React, { useCallback, useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput, SelectBox, PrimaryButton } from "../components/UIkit";
import { saveProduct } from "../reducks/products/operations";

const ProductEdit = () => {
  const dispatch = useDispatch();

  const [name, setName] = useState(""),
    [description, setDescription] = useState(""),
    [category, setCategory] = useState(""),
    [gender, setGender] = useState(""),
    [price, setPrice] = useState("");

  const inputName = useCallback(
    (event) => {
      setName(event.target.value);
    },
    [setName]
  );

  const inputCategory = useCallback(
    (event) => {
      setDescription(event.target.value);
    },
    [setDescription]
  );

  const inputPrice = useCallback(
    (event) => {
      setPrice(event.target.value);
    },
    [setPrice]
  );

  const categories = [
    { id: "tops", name: "トップス" },
    { id: "shirts", name: "シャツ" },
    { id: "pants", name: "パンツ" },
  ];

  const genders = [
    { id: "all", name: "すべて" },
    { id: "male", name: "メンズ" },
    { id: "female", name: "レディース" },
  ];

  return (
    <section>
      <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
      <div className="c-section-container">
        <TextInput fullWidth={true} label={"商品名"} multiline={false} rows={1} required={true} value={name} type={"text"} onChange={inputName} />
        <TextInput fullWidth={true} label={"商品説明"} multiline={true} rows={5} required={true} value={description} type={"text"} onChange={inputCategory} />
        <SelectBox label={"カテゴリー"} required={true} select={setCategory} options={categories} />
        <SelectBox label={"性別"} required={true} select={setGender} options={genders} />
        <TextInput fullWidth={true} label={"価格"} multiline={false} rows={1} required={true} value={price} type={"number"} onChange={inputPrice} />
        <div className={"module-spacer--medium"} />
        <div className={"center"}>
          <PrimaryButton label={"商品情報を保存"} onClick={() => dispatch(saveProduct(name, description, category, gender, price))} />
        </div>
      </div>
    </section>
  );
};

export default ProductEdit;
