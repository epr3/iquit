import React from "react";
import { useForm, Controller } from "react-hook-form";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

import Layout from "../components/layout";
import SEO from "../components/seo";

interface Inputs {
  name: string;
  contract_no: string;
  date: string;
}

const IndexPage = () => {
  const { control, register, handleSubmit, errors } = useForm<Inputs>();
  const onSubmit = (data: Inputs) => console.log(data);

  return (
    <Layout>
      <SEO title="Home" />
      <div
        dangerouslySetInnerHTML={{
          __html:
            '<a href="javascript:gaOptout();">Deactivate Google Analytics</a>'
        }}
      />

      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          type="text"
          name="name"
          defaultValue=""
          ref={register({ required: true })}
        />
        {errors.name && errors.name.type === "required" && (
          <span>Name is required</span>
        )}
        <input
          type="text"
          name="contract_no"
          defaultValue=""
          ref={register({ required: true })}
        />
        {errors.contract_no && errors.contract_no.type === "required" && (
          <span>Contract number is required</span>
        )}
        <Controller
          as={DatePicker}
          control={control}
          valueName="selected"
          name="date"
          onChange={([selected]) => selected}
          rules={{ required: true }}
          defaultValue=""
        />

        {errors.date && errors.date.type === "required" && (
          <span>Date is required</span>
        )}

        <button type="submit">Submit</button>
      </form>
    </Layout>
  );
};

export default IndexPage;
