import Head from "next/head";
import Image from "next/image";
import ContactUs from "../components/ContactUs";
import styles from "../styles/Home.module.css";
//import HCaptcha from "@hcaptcha/react-hcaptcha";
import HForm from "../components/HForm";

// const hkey = process.env.NEXT_PUBLIC_HCAPTCHA_API_KEY;

export default function Home() {

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
        <HForm/>
      </main>
    </div>
  );
}
