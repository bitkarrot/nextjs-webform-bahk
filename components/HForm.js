import React, { useEffect, useRef, useState } from "react";
import HCaptcha from "@hcaptcha/react-hcaptcha";

const hcaptchakey = process.env.NEXT_PUBLIC_HCAPTCHA_API_KEY

export default function HForm() {
  const [token, setToken] = useState(null);
  const captchaRef = useRef(null);

  const onLoad = () => {
    // this reaches out to the hCaptcha JS API and runs the
    // execute function on it. you can use other functions as
    // documented here:
    // https://docs.hcaptcha.com/configuration#jsapi
    captchaRef.current.execute();
  };

  useEffect(() => {
    if (token)
      console.log(`hCaptcha Token: ${token}`);
  }, [token]);

  return (
    <form>
      <HCaptcha
        sitekey={hcaptchakey}
        onLoad={onLoad}
        onVerify={setToken}
        ref={captchaRef}
      />
    </form>
  );
}