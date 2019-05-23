
import React from 'react';

import Card from './Card';

const CardLinks = () => (
  <Card title="Links">
    <a href="https://win.win/" target="_blank">Website</a><br />
    {/* <a href="https://bitcointalk.org/" target="_blank">Bitcointalk</a><br /> */}
    <a href="https://github.com/NewCapital/TWINS-Core" target="_blank">Github</a><br />
    <a href="https://www.reddit.com/r/TWINS/" target="_blank">Reddit</a><br />
    <a href="https://discord.dogec.io/" target="_blank">Discord</a><br />
    <a href="https://telegram.dogec.io/" target="_blank">Telegram</a><br />
    <a href="https://twitter.dogec.io/" target="_blank">Twitter</a><br />
    <a href="https://steemit.dogec.io/" target="_blank">Steemit</a>
  </Card>
);

export default CardLinks;
