import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

function Detail(props) {
  let [hideAlert, setHide] = useState(false);
  let [num, setNum] = useState("");
  let { id } = useParams();
  let foundId = props.records.find((a) => a.id == id);

  useEffect(() => {
    let timeout = setTimeout(() => {
      setHide(true);
    }, 2000);
    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (isNaN(num) == true) {
      alert("그러지마쇼");
    }
  }, [num]); // num이 변결될 때만 실행

  return (
    <div className="container">
      {!hideAlert && (
        <div className="alert alert-warning">2초이내 구매시 뽀뽀해드림</div>
      )}
      <div className="row">
        <div className="col-md-6">
          <img
            src={`${process.env.PUBLIC_URL}/records${[foundId.id]}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <input
            onChange={(e) => {
              setNum(e.target.value);
            }} // 인풋에 값 입력 하면 num 을 state에 저장
          />
          <h4 className="pt-5">{[foundId.title]}</h4>
          <p>{[foundId.content]}</p>
          <p>{[foundId.price]}</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
}

export default Detail;
