import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/ContactUs";
import styles from "../styles/Home.module.css";
import HForm from "../components/HForm";
import HCaptcha from "@hcaptcha/react-hcaptcha";

export default function Home() {
  const hcaptchakey = process.env.HCAPTCHA_API_KEY

  return (
    <div className="">
      <Head>
        <title>Feedback Form</title>
        <meta
          name="description"
          content="A working contact form with Sendgrid integration and form validations."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="">
        Form here
        <HCaptcha
      sitekey={hcaptchakey}
      onVerify={(token,ekey) => handleVerificationSuccess(token, ekey)}
    />
      </main>
    </div>
  );
}
