/**
 * Copyright (c) 2024, WSO2 LLC (http://www.wso2.com) All Rights Reserved.
 *
 * WSO2 LLC licenses this file to you under the Apache License,
 * Version 2.0 (the "License"); you may not use this file except
 * in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied. See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

import React from 'react';
import { Row, Col, Container } from 'react-bootstrap';
import Head from 'next/head';

import Layout from '../../../layouts/LayoutCommunity';
import Outline from '../../../components/student-engagement/outline/Outline';
import Events from '../../../components/student-engagement/events/Events';
import SECarousel from '../../../components/common/image-carousel/ImageCarousel';
import GetInvolved from '../../../components/student-engagement/get-involved/GetInvolved';

export default function StudentEngagemntProgram() {

  const getLink = (element, id) => {
    if (element.tagName.toLowerCase() === "path")
      element = element.parentElement;

    const elementNodeList = document.querySelectorAll(`#${id}`);
    const elementArray = Array.prototype.slice.call(elementNodeList);
    const count = elementArray.indexOf(element.parentElement);

    if (count === 0) {
      location.hash = `#${id}`;
    } else {
      location.hash = `#${id}-${count}`;
    }

    navigator.clipboard.writeText(window.location.href);
    element.parentElement.scrollIntoView();
  };

  const images = [
    '/images/university/6.png',
    '/images/university/2.png',
    '/images/university/4.png',
    '/images/university/1.png',
    '/images/university/3.jpg',
    '/images/university/5.jpg'
  ];

  return (
    <>
      <Head>
        <title>Student engagemnt program - The Ballerina programming language</title>
        <meta name="description" content="Join the Ballerina community and use the below channels to ask questions, find answers, post feedback, and help establish Ballerina as a truly community-owned resource." />
        <meta name="keywords" content="ballerinalang, integration, microservices, programming language, cloud native, ballerina language" />

        {/* <!--FB--> */}
        <meta property="og:type" content="article" />
        <meta property="og:title" content="Student engagemnt program - The Ballerina programming language" />
        <meta property="og:description" content="Join the Ballerina community and use the below channels to ask questions, find answers, post feedback, and help establish Ballerina as a truly community-owned resource." />

        {/* <!--LINKED IN  --> */}
        <meta property="og:title" content="Student engagemnt program - The Ballerina programming language" />
        <meta property="og:description" content="Join the Ballerina community and use the below channels to ask questions, find answers, post feedback, and help establish Ballerina as a truly community-owned resource." />

        {/* <!--TWITTER--> */}
        <meta name="twitter:title" content="Student engagemnt program - The Ballerina programming language" />
        <meta property="twitter:description" content="Join the Ballerina community and use the below channels to ask questions, find answers, post feedback, and help establish Ballerina as a truly community-owned resource." />
        <meta property="twitter:text:description" content="Join the Ballerina community and use the below channels to ask questions, find answers, share feedback, and help establish Ballerina as a truly community-owned resource." />
      </Head>
      <Layout>
        <Col sm={12}>

          <Row className="pageHeader pageContentRow communityRow communityIntro">
            <Col xs={12}>
              <Container>
                <Row>
                  <img src="/images/ballerina-mesh-grey-cropped.svg" className="background-image" alt="Background" />
                  <Col xs={12} md={12} lg={6}>
                    <h1>Student engagement program</h1>
                    <p style={{ fontSize: "24px", fontWeight: "400", color: "#20b6b0", marginTop: "40px" }}>Ballerina is dedicated to fostering the advancement of the next generation. In pursuit of this goal, we currently organize engaging sessions for university students, focusing on industry topics relevant to their academic curriculum and captivating the student community.</p>
                    <a href="#program-outline" className="join">
                      Learn more
                    </a>
                  </Col>
                  <Col xs={12} md={12} lg={6} style={{ paddingTop: "35px" }}>
                    <SECarousel images={images} />
                  </Col>
                </Row>
              </Container>
            </Col>
          </Row>

          <Row className="pageContentRow communityRow slackRow">
            <Outline getLink={getLink} />
          </Row>

          <Row className="pageContentRow communityRow">
            <Events getLink={getLink} />
          </Row>

          <Row className="pageContentRow communityRow slackRow">
            <GetInvolved getLink={getLink} />
          </Row>

        </Col>
      </Layout>
    </>
  );
}
