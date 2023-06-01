import React, { memo, useEffect, useState } from "react";
import { RightWrapper } from "./style";
import IconGlobal from "@/assets/svg/icon_global";
import IconMenu from "@/assets/svg/icon_menu";
import IconAvatar from "@/assets/svg/icon_avatar";

const HeaderRight = memo(() => {
  // 定义组件内部的状态
  const [showPanel, setShowPanel] = useState(false);

  // 副作用代码
  useEffect(() => {
    function windowClickHandle() {
      setShowPanel(false);
    }

    window.addEventListener("click", windowClickHandle, true)
    return () => {
      window.removeEventListener("click", windowClickHandle, true)
    }
  })

  // 事件处理函数
  function profileClickHandle() {
    setShowPanel(true);
  }

  return (
    <RightWrapper>
      <div className="btns">
        <span>登录</span>
        <span>注册</span>
        <span>
          <IconGlobal />
        </span>
      </div>

      <div className="profile" onClick={profileClickHandle}>
        <IconMenu />
        <IconAvatar />
        {showPanel && (
          <div className="panel">
            <div className="top">
              <div className="register">注册</div>
              <div className="login">登录</div>
            </div>
            <div className="bottom">
              <div className="hire">出租房屋</div>
              <div className="experience">开展体验</div>
              <div className="help">帮助</div>
            </div>
          </div>
        )}
      </div>
    </RightWrapper>
  );
});

export default HeaderRight;
