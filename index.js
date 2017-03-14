import config from './config';

import Loader from 'shared/components/loader/0.1';

import iOSScreen from 'shared/components/ios_splash_screen/0.1';

import TitleScreen from 'game-green-team-challenge/components/title_screen';
import LevelScreen from 'game-green-team-challenge/components/level_screen_component';
import LevelCompleteScreen from
    'game-green-team-challenge/components/level_complete_screen_component';

import PricelessPourer1InfoScreen from
    'game-green-team-challenge/components/priceless_pourer_one_info_screen';
import PricelessPourer1Screen from
    'game-green-team-challenge/components/priceless_pourer_level_one_screen';
import PricelessPourer2InfoScreen from
    'game-green-team-challenge/components/priceless_pourer_two_info_screen';
import PricelessPourer2Screen from
    'game-green-team-challenge/components/priceless_pourer_level_two_screen';
import PricelessPourer3InfoScreen from
    'game-green-team-challenge/components/priceless_pourer_three_info_screen';
import PricelessPourer3Screen from
    'game-green-team-challenge/components/priceless_pourer_level_three_screen';
import PricelessPourer4InfoScreen from
    'game-green-team-challenge/components/priceless_pourer_four_info_screen';
import PricelessPourer4Screen from
    'game-green-team-challenge/components/priceless_pourer_level_four_screen';
import PricelessPourer5InfoScreen from
    'game-green-team-challenge/components/priceless_pourer_five_info_screen';
import PricelessPourer5Screen from
    'game-green-team-challenge/components/priceless_pourer_level_five_screen';

import QuitScreen from 'game-green-team-challenge/components/quit_screen';

import ItemsToSort from 'game-green-team-challenge/components/items_to_sort';

let binNames = [
    'recycle',
    'landfill',
    'compost',
    'liquids',
];

let itemsToSort = _.filter(ItemsToSort, item => _.includes(binNames, item.bin));

let audioRefs = _.uniq(_.map(itemsToSort, v =>
    _.kebabCase(_.replace(v.name, /\d+/g, '')))
);

let audioArray = _.map(audioRefs, (v, k) => {
    return {
        type: skoash.Audio,
        ref: v,
        key: k,
        props: {
            type: 'voiceOver',
            src: `${CMWN.MEDIA.GAME + 'sound-assets/_vositems/' + v}.mp3`,
            checkReady: false,
            onPlay: function () {
                this.updateScreenData({
                    keys: ['item', 'new'],
                    data: false,
                });
            }
        },
    };
});

skoash.start(
    <skoash.Game
        config={config}
        loader={<Loader />}
        screenBufferAmount={2}
        screens={[
            iOSScreen,
            TitleScreen,
            LevelScreen(2.0),
            PricelessPourer1InfoScreen,
            PricelessPourer1Screen,
            LevelScreen(2.1),
            PricelessPourer2InfoScreen,
            PricelessPourer2Screen,
            LevelScreen(2.2),
            PricelessPourer3InfoScreen,
            PricelessPourer3Screen,
            LevelScreen(2.3),
            PricelessPourer4InfoScreen,
            PricelessPourer4Screen,
            LevelScreen(2.4),
            PricelessPourer5InfoScreen,
            PricelessPourer5Screen,
            LevelScreen(2.5),
            LevelCompleteScreen(2),
        ]}
        menus={{
            quit: QuitScreen,
        }}
        assets={[
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_recycle`}
                spriteClass="recycle-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_liquids`}
                spriteClass="liquids-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_landfill`}
                spriteClass="landfill-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}_compost`}
                spriteClass="compost-item"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}level.1.conveyor.belt`}
                spriteClass="priceless-belt"
                dataTarget="priceless-belt"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}level.2.chocolate.milk`}
                spriteClass="priceless-chocolate"
                dataTarget="priceless-chocolate"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}level.2.milk`}
                spriteClass="priceless-milk"
                dataTarget="priceless-milk"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}level.2.fruit.juice`}
                spriteClass="priceless-fruit"
                dataTarget="priceless-fruit"
            />,
            <skoash.SpriteCSS
                src={`${CMWN.MEDIA.SPRITE}level.2.orange.juice`}
                spriteClass="priceless-orange"
                dataTarget="priceless-orange"
            />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_recycle.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_liquids.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_landfill.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}_compost.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}purple.ribbon.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}luggage.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.star.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}frame.01.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}frame.02.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.FRAME}transition.frame.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.SPRITE}sprite.mainnav.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}Img.anotherChance.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}img.resort.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}vertical.pipe.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}pipe.meter.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}container.png`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}titlescrnbg.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.01.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.02.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.03.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.04.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.transition.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.trash.recycle.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.trash.landfill.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}background.trash.compost.jpg`} />,
            <skoash.Image className="hidden" src={`${CMWN.MEDIA.IMAGE}quit.background.jpg`} />,
            <skoash.Audio type="sfx" ref="button" src={`${CMWN.MEDIA.EFFECT}ButtonClick.mp3`} />,
            <skoash.Audio
                type="sfx"
                ref="screen-complete"
                src={`${MEDIA.EFFECT}NextAppear.mp3`}
                volume={3}
            />,
            <skoash.Audio ref="BKG0" type="background" src={`${CMWN.MEDIA.EFFECT}titlescreen.mp3`} loop />,
            <skoash.Audio ref="BKG2" type="background" src={`${CMWN.MEDIA.EFFECT}BKG2.mp3`} loop />,
            <div className="background title" />,
            <div className="background bkg1" />,
            <div className="background bkg2" />,
            <div className="background bkg3" />,
            <div className="background bkg4" />,
            <div className="background trash" />,
            <div className="background transition" />,
            <div className="background quit" />,
        ].concat(audioArray)}
    />
);

if (module.hot) module.hot.accept();
