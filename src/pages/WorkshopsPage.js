import React from "react";
import { useTranslation } from "react-i18next";
import { Container } from "@material-ui/core";

import VideoPlayer from "../components/VideoPlayer";
import Item from "../components/Item";
import Contactame from "../components/Contactame";

import Header from "../components/Header";
import Video from "../assets/videos/talleres_2023.mp4";
import Footer from "../components/Footer";
import TalleresMetas2019 from "../assets/img/metas_2019.png";
import TalleresMetas2020 from "../assets/img/metas_2020.png";
import TalleresMetasDinero from "../assets/img/metas_y_dinero.png";
import TalleresMetasAmor from "../assets/img/metas_y_amor.png";
import TalleresNegatividadFavor from "../assets/img/negatividad_favor.png";
import TalleresSoltarPasado from "../assets/img/soltar_pasado.jpg";
import TalleresAlquimizarRealidad from "../assets/img/alquimizar_realidad.jpg";
import TalleresOrdenaInterior from "../assets/img/ordena_interior.jpg";
import TalleresProgramate from "../assets/img/programate.jpg";
import TalleresSeñales1 from "../assets/img/señales1.jpg";
import TalleresSeñales2 from "../assets/img/señales2.jpg";
import TalleresSeñales3 from "../assets/img/señales3.jpg";
import TalleresGenealogia from "../assets/img/genealogia.jpg";

export default function WorkshopsPage() {
  const { t } = useTranslation();
  return (
    <div className="container--grid">
      <Header />
      <Container className="MuiContainer-disableGutters">
        <VideoPlayer url={Video} />
        <Item title={t("talleres.title")} description={t("talleres.note")} />
        <Item
          title={t("talleres.metas2019.title")}
          description={t("talleres.metas2019.description")}
          img={TalleresMetas2019}
        />
        <Item
          title={t("talleres.metas2020.title")}
          description={t("talleres.metas2020.description")}
          img={TalleresMetas2020}
        />
        <Item
          title={t("talleres.metasDinero.title")}
          description={t("talleres.metasDinero.description")}
          img={TalleresMetasDinero}
        />
        <Item
          title={t("talleres.metasAmor.title")}
          description={t("talleres.metasAmor.description")}
          img={TalleresMetasAmor}
        />
        <Item
          title={t("talleres.usarEnvidiaFavor.title")}
          description={t("talleres.usarEnvidiaFavor.description")}
          img={TalleresNegatividadFavor}
        />
        <Item
          title={t("talleres.soltarElPasado.title")}
          description={t("talleres.soltarElPasado.description")}
          img={TalleresSoltarPasado}
        />
        <Item
          title={t("talleres.alquimizarLaRealidad.title")}
          description={t("talleres.alquimizarLaRealidad.description")}
          img={TalleresAlquimizarRealidad}
        />
        <Item
          title={t("talleres.ordenaTuInterior.title")}
          description={t("talleres.ordenaTuInterior.description")}
          img={TalleresOrdenaInterior}
        />
        <Item
          title={t("talleres.programateParaEstarDelgado.title")}
          description={t("talleres.programateParaEstarDelgado.description")}
          img={TalleresProgramate}
        />
        <Item
          title={t("talleres.senales1.title")}
          description={t("talleres.senales1.description")}
          img={TalleresSeñales1}
        />
        <Item
          title={t("talleres.senales2.title")}
          description={t("talleres.senales2.description")}
          img={TalleresSeñales2}
        />
        <Item
          title={t("talleres.senales3.title")}
          description={t("talleres.senales3.description")}
          img={TalleresSeñales3}
        />
        <Item
          title={t("talleres.genealogia.title")}
          description={t("talleres.genealogia.description")}
          img={TalleresGenealogia}
        />
      </Container>
      <Contactame />
      <Footer title="Natalia Barrera" description="Descripcion" />
    </div>
  );
}
