import axios from "axios";
import { PrimaryButton } from "components/buttons/primary-button";
import { Input } from "components/inputs/input";
import { aws_api_baseurl } from "libs/constants";
import Link from "next/link";
import { useState } from "react";
import styled from "styled-components";
import Select from "react-select";
import { ImageInput } from "components/inputs/image-input";
import { SoundInput } from "components/inputs/sound-input";
import { useCallback } from "react";

export default function Add(props) {
  const providerOptions = [
    { value: "パパ", label: "パパ" },
    { value: "ママ", label: "ママ" },
    { value: "みほ姉", label: "みほ姉" },
  ];
  const manufacturerOptions = [
    { value: "トヨタ", label: "トヨタ" },
    { value: "日産", label: "日産" },
    { value: "スズキ", label: "スズキ" },
  ];

  // 日付input用の日付取得
  const now = new Date();
  const dateFormat = (today, format) => {
    format = format.replace("YYYY", today.getFullYear());
    format = format.replace("MM", ("0" + (today.getMonth() + 1)).slice(-2));
    format = format.replace("DD", ("0" + today.getDate()).slice(-2));
    return format;
  };
  const today = dateFormat(now, "YYYY-MM-DD");

  // const [no, setNo] = useState(0);
  // const [name, setName] = useState(0);
  // const [manufacturer, setManufacturer] = useState(0);
  // const [provider, setProvider] = useState(0);
  // const [date, setDate] = useState(0);
  const [no, setNo] = useState("");
  const [name, setName] = useState("");
  const [manufacturer, setManufacturer] = useState(
    manufacturerOptions[0].value
  );
  const [provider, setProvider] = useState(providerOptions[0].value);
  const [date, setDate] = useState(today);
  const [result, setResult] = useState({ status: "", data: "" });
  const [imgBase64, setImgBase64] = useState(null);
  const [soundBase64, setSoundBase64] = useState(null);

  // Submitボタン押下時の処理
  const onClickSubmit = useCallback(() => {
    // 登録データの生成
    const data = {
      id: 0,
      no: no,
      name_en: "Name English",
      name_jp: name,
      image_path: "",
      sound_path: "",
      manufacturer: manufacturer,
      provider: provider,
      got_at: date,
      created_at: today,
      deleted: false,
      base64String: imgBase64,
      soundBase64String: soundBase64,
    };

    // 入力データ検証
    if (no === "") {
      console.log("トミカ番号を入力してください");
      return;
    }
    if (name === "") {
      console.log("名前を入力してください");
      return;
    }

    console.log("DATA is OK.");
    console.log(data);

    // // APIへのPOST
    axios
      .post(aws_api_baseurl + "/tomicars", data)
      .then((res) => {
        console.log(res);
        setResult({ ...result, status: res.status, data: res.data });
      })
      .catch((error) => {
        console.log("POST TOMICA ERROR: " + error);
        setResult({ ...result, status: "Error", data: error.message });
      });
  }, []);

  const onClickConfirm = useCallback(() => {
    setResult("");
  }, []);

  // React-Selectのカスタムスタイル
  const selectStyles = {
    option: (provided, state) => ({
      ...provided,
      //ここでボックスの中身のスタイルをカスタマイズ
      padding: 20,
    }),
    control: () => ({
      width: "50vw",
      display: "flex",
      borderColor: "var(--beige-25)",
      borderRadius: "8px",
      borderStyle: "solid",
      borderWidth: "2px",
      backgroundColor: "var(--white)",
      minWidth: "100px",
    }),
    singleValue: (provided, state) => {
      const opacity = state.isDisabled ? 0.5 : 1;
      const transition = "opacity 300ms";

      return { ...provided, opacity, transition };
    },
  };

  return (
    <>
      {result.status ? (
        <>
          {result.status === 200 ? (
            <p>Success: {JSON.stringify(result.data)}</p>
          ) : (
            <p>Failed: {result.data}</p>
          )}
          <PrimaryButton onClick={onClickConfirm}>Confirm</PrimaryButton>
        </>
      ) : (
        <>
          <SHeading>トミカの追加</SHeading>
          <SContainer>
            <Input
              type="number"
              value={no}
              placeholder="no*"
              onChange={(e) => setNo(e.target.value)}
            />
            <Input
              value={name}
              placeholder="name*"
              onChange={(e) => setName(e.target.value)}
            />
            <Select
              styles={selectStyles}
              defaultValue={manufacturerOptions[0]}
              options={manufacturerOptions}
              onChange={(value) =>
                value ? setManufacturer(value.value) : null
              }
            />
            <Select
              styles={selectStyles}
              defaultValue={providerOptions[0]}
              options={providerOptions}
              onChange={(value) => (value ? setProvider(value.value) : null)}
            />
            <Input
              type="date"
              value={date}
              placeholder="get date*"
              onChange={(e) => setDate(e.target.value)}
            />
            <ImageInput base64={imgBase64} setBase64={setImgBase64} />
            <SoundInput base64={soundBase64} setBase64={setSoundBase64} />
            <SButtonContainer>
              <PrimaryButton onClick={onClickSubmit}>Submit</PrimaryButton>
              <SLink href="/manage">Cancel</SLink>
            </SButtonContainer>
          </SContainer>
        </>
      )}
    </>
  );
}
const SHeading = styled.h2`
  text-align: center;
  padding: 6px 0px;
  font-size: var(--heading2);
`;
const SContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  row-gap: 1.5em;
`;

const SButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1em;
`;

const SLink = styled(Link)`
  text-align: center;
  padding: 6px 24px;
  margin-bottom: 30px;
  &:hover {
    opacity: 0.8;
    cursor: pointer;
  }
`;
