import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "@material-ui/core";

import Header from "../components/Header";
import Contactame from "../components/Contactame";
import Footer from "../components/Footer";

import MembershipImg from "../assets/img/membresia.jpeg";
import Item from "../components/Item";

export default function MemberShipPage() {
  const { t } = useTranslation();
  return (
    <div className="container--grid">
      <Header />
      <Container className="MuiContainer-disableGutters">
        <Item
          title={t("membership.title")}
          description={t("membership.description")}
          img={MembershipImg}
        />
      </Container>
      <Contactame />
      <Footer title="Natalia Barrera" description="Descripcion" />
    </div>
  );
}
