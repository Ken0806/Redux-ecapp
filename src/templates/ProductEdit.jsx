import React, { useCallback, useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { TextInput, SelectBox, PrimaryButton } from "../components/UIkit";
import { ImageArea } from "../components/Products";
import { saveProduct } from "../reducks/products/operations";
import { db } from "../firebase";
import { SetSizeArea } from "../components/Products";

const ProductEdit = () => {
  const dispatch = useDispatch();
  let id = window.location.pathname.split("/product/edit")[1];

  if (id !== "") {
    id = id.split("/")[1];
  }

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

  const [name, setName] = useState(""),
    [description, setDescription] = useState(""),
    [images, setImages] = useState([]),
    [category, setCategory] = useState(""),
    [gender, setGender] = useState(""),
    [price, setPrice] = useState(""),
    [sizes, setSizes] = useState([]);

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

  useEffect(() => {
    if (id !== "") {
      db.collection("products")
        .doc(id)
        .get()
        .then((snapshot) => {
          const product = snapshot.data();
          setName(product.name);
          setDescription(product.description);
          setImages(product.images);
          setCategory(product.category);
          setGender(product.gender);
          setPrice(product.price);
          setSizes(product.sizes);
        });
    }
  }, [id]);

  return (
    <section>
      <h2 className="u-text__headline u-text-center">商品の登録・編集</h2>
      <div className="c-section-container">
        <ImageArea images={images} setImages={setImages} />
        <TextInput fullWidth={true} label={"商品名"} multiline={false} rows={1} required={true} value={name} type={"text"} onChange={inputName} />
        <TextInput fullWidth={true} label={"商品説明"} multiline={true} rows={5} required={true} value={description} type={"text"} onChange={inputCategory} />
        <SelectBox label={"カテゴリー"} required={true} select={setCategory} options={categories} value={category} />
        <SelectBox label={"性別"} required={true} select={setGender} options={genders} value={gender} />
        <TextInput fullWidth={true} label={"価格"} multiline={false} rows={1} required={true} value={price} type={"number"} onChange={inputPrice} />
        <div className={"module-spacer--small"} />
        <SetSizeArea sizes={sizes} setSizes={setSizes} />
        <div className={"module-spacer--small"} />
        <div className={"center"}>
          <PrimaryButton label={"商品情報を保存"} onClick={() => dispatch(saveProduct(id, name, description, category, gender, price, images, sizes))} />
        </div>
      </div>
    </section>
  );
};

export default ProductEdit;
