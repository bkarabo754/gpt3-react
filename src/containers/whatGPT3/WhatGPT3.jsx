import React from 'react';
import { Feature } from '../../components';

import './whatGPT3.css';

const WhatGPT3 = () => (
  <div className="gpt3__whatgpt3 section__margin" id="wgpt3">
    <div className="gpt3__whatgpt3-feature">
      <Feature title="What is GPT-3" text="Generative Pre-trained Transformer 3 is an autoregressive language model that uses deep learning to produce human-like text." />
    </div>
    <div className="gpt3__whatgpt3-heading">
      <h1 className="gradient__text">The possibilities are beyond your imagination</h1>
      <p>Explore the Library</p>
    </div>
    <div className="gpt3__whatgpt3-container">
      <Feature title="Chatbots" text="Using text on the internet, GPT-3 is trained to generate realistic human text." />
      <Feature title="Knowledgebase" text="GPT-3 (Generative Pretrained Transformer 3) is a state-of-the-art language processing AI model developed by OpenAI." />
      <Feature title="Education" text="It is capable of generating human-like text and has a wide range of applications, including language translation, language modelling, and generating text for applications such as chatbots" />
    </div>
  </div>
);

export default WhatGPT3;