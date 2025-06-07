// src/pages/OAuthCallback.tsx
import React, { useEffect } from "react";
import { useSearchParams, useNavigate } from "react-router";

const OAuthCallback: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const code = searchParams.get("code");

  useEffect(() => {
    if (!code) {
      // code 파라미터가 없다면 홈으로 리다이렉트
      navigate("/");
      return;
    }

    // TODO: 이 코드 값을 백엔드(또는 서버리스 함수)로 보내서
    //       access_token 교환 로직을 수행하도록 호출하세요.
    //       예: fetch("/.netlify/functions/exchangeCode?code=" + code)...

    // 임시로 홈 화면으로 리다이렉트
    navigate("/");
  }, [code, navigate]);

  return (
    <div>
      <h1>Logging you in…</h1>
      <p>잠시만 기다려 주세요.</p>
    </div>
  );
};

export default OAuthCallback;
