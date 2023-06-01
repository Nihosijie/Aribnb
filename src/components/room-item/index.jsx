import PropTypes from "prop-types";
import React, { memo } from "react";
import { ItemWrapper } from "./style";
import { Rating } from "@mui/material";

const RoomItem = memo((props) => {
  const { itemData } = props;
  console.log(props);
  return (
    <ItemWrapper verifyColor={itemData?.verify_info?.text_color}>
      <div className="inner">
        <div className="cover">
          <img src={itemData.picture_url} alt="" />
        </div>
        <div className="desc">{itemData.verify_info.messages.join(" · ")}</div>
        <div className="name">{itemData.name}</div>
        <div className="price">￥{itemData.price}/晚</div>
        <div className="bottom">
          <Rating
            name="half-rating-read"
            defaultValue={itemData.star_rating ?? 5}
            precision={0.5}
            style={{ fontSize: "12px", color: "#00848a" }}
            readOnly
          />
          <span>{itemData.reviews_count}</span>
          {itemData?.bottom_info?.content && (
            <span>·{itemData.bottom_info.content}</span>
          )}
        </div>
      </div>
    </ItemWrapper>
  );
});

RoomItem.propTypes = {
  itemData: PropTypes.object,
};

export default RoomItem;
