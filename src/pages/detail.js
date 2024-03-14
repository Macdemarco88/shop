import { useParams } from "react-router-dom";
import styled from "styled-components";

let YellowBtn = styled.button`
  background: yellow;
  color: black;
  padding: 10px;
`;

function Detail(props) {
  let { id } = useParams();
  console.log(id);
  let foundId = props.records.find((a) => a.id == id);
  console.log(foundId);

  return (
    <div className="container">
      <YellowBtn>버튼</YellowBtn>
      <div className="row">
        <div className="col-md-6">
          <img
            src={`${process.env.PUBLIC_URL}/records${[foundId.id]}.jpg`}
            width="100%"
          />
        </div>
        <div className="col-md-6">
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
