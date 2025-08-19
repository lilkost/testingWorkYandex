import { useDynamicAdapt } from './dynamicAdapt.js'
import { sliderPartyCreate } from "./components/sliderParty.js";
import { sliderStageCreate } from './components/sliderStage.js';
import { isVisibleBlock } from './components/visibleBlock.js';

useDynamicAdapt();
sliderPartyCreate();
sliderStageCreate();
isVisibleBlock();