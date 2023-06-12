export const KNOWN_NAMES = [
    ' ',
    '  ',
    'xxx',

    'bg',
    'vs',
    'xp',
    'all',
    'air',
    'bow',
    'box',
    'buy',
    'env',
    'fog',
    'inv',
    'law',
    'map',
    'combat',
    'labels',
    'details',
    'compositemap',

    'alone',
    'aztec',
    'bark',
    'books',
    'chest',
    'coins',
    'crag',
    'cross',
    'dark',
    'door',
    'dream',
    'egypt',
    'gaol',
    'iban',
    'key',
    'keys',
    'lair',
    'lava',
    'logo',
    'main',
    'march',
    'mesh',
    'moody',
    'mummy',
    'nomad',
    'null',
    'pen',
    'quest',
    'regal',
    'roof',
    'roof2',
    'runes',
    'saga',
    'shine',
    'stars',
    'start',
    'theme',
    'achey',
    'accept',
    'acorn',
    'ahrims',
    'advice',
    'ambush',
    'anger1',
    'anger2',
    'anger3',
    'anger4',
    'anger5',
    'anger6',
    'anger7',
    'anger8',
    'anger9',
    'back',
    'badge',
    'banner',
    'barb',
    'base',
    'bash',
    'abox',
    'arena',
    'arrow',
    'arrows',
    'arrow0',
    'arrow1',
    'arrow2',
    'arrow3',
    'axe0',
    'axe1',
    'axe2',
    'axe3',
    'axe101',
    'award',

    // stats
    'agility',
    'attack',
    'defence',
    'crafting',
    'cooking',
    'construction',
    'farming',
    'fletching',
    'hitpoints',
    'herblore',
    'hunter',
    'mining',
    'slayer',
    'ranged',
    'runecraft',
    'smithing',
    'strength',
    'summoning',
    'thieving',
    'woodcutting',
    'firemaking',

    // runes
    'fire',
    'earth',
    'mind',
    'chaos',
    'death',
    'blood',
    'nature',
    'astral',
    'soul',
    'cosmic',
    'dust',
    'mist',
    'smoke',
    'mud',
    'body',
];

console.time('Imported OSRS names');
// seed with known names from OSRS
import fs from 'fs';
fs.readFileSync('osrs.tsv', 'ascii').replaceAll('\r\n', '\n').split('\n').forEach(x => {
    let parts = x.split('\t');
    if (parts.length > 3 && parts[4].length && KNOWN_NAMES.indexOf(parts[4]) === -1) {
        KNOWN_NAMES.push(parts[4]);
    }
});
console.timeEnd('Imported OSRS names');

console.time('Imported 530 names');
fs.readFileSync('leanbow.tsv', 'ascii').replaceAll('\r\n', '\n').split('\n').forEach(x => {
    let parts = x.split('\t');
    if (KNOWN_NAMES.indexOf(parts[1]) === -1) {
        KNOWN_NAMES.push(parts[1]);
    }
});
console.timeEnd('Imported 530 names');

console.time('Imported extra names');
fs.readFileSync('walied.tsv', 'ascii').replaceAll('\r\n', '\n').split('\n').forEach(x => {
    let parts = x.split('\t');
    if (parts.length > 3 && parts[4].length && KNOWN_NAMES.indexOf(parts[4]) === -1) {
        KNOWN_NAMES.push(parts[4]);
    }
});
console.timeEnd('Imported extra names');

console.time('Imported 2004 names');
let oldList = [// title
    'index.dat',
    'logo.dat',
    'p11.dat',
    'p12.dat',
    'b12.dat',
    'q8.dat',
    'runes.dat',
    'title.dat',
    'titlebox.dat',
    'titlebutton.dat',
    // seen in 274
    'p11_full.dat',
    'p12_full.dat',
    'b12_full.dat',
    'q8_full.dat',

    // config
    'flo.dat',
    'flo.idx',
    'idk.dat',
    'idk.idx',
    'loc.dat',
    'loc.idx',
    'npc.dat',
    'npc.idx',
    'obj.dat',
    'obj.idx',
    'seq.dat',
    'seq.idx',
    'spotanim.dat',
    'spotanim.idx',
    'varp.dat',
    'varp.idx',
    // seen in 254
    'varbit.dat',
    'varbit.idx',
    // seen in 274
    'mesanim.dat',
    'mesanim.idx',
    'mes.dat',
    'mes.idx',
    'param.dat',
    'param.idx',
    'hunt.dat',
    'hunt.idx',

    // interface
    'data',

    // media
    'backbase1.dat',
    'backbase2.dat',
    'backhmid1.dat',
    'backhmid2.dat',
    'backleft1.dat',
    'backleft2.dat',
    'backright1.dat',
    'backright2.dat',
    'backtop1.dat',
    'backtop2.dat',
    'backvmid1.dat',
    'backvmid2.dat',
    'backvmid3.dat',
    'chatback.dat',
    'combatboxes.dat',
    'combaticons.dat',
    'combaticons2.dat',
    'combaticons3.dat',
    'compass.dat',
    'cross.dat',
    'gnomeball_buttons.dat',
    'headicons.dat',
    'hitmarks.dat',
    // index.dat
    'invback.dat',
    'leftarrow.dat',
    'magicoff.dat',
    'magicoff2.dat',
    'magicon.dat',
    'magicon2.dat',
    'mapback.dat',
    'mapdots.dat',
    'mapflag.dat',
    'mapfunction.dat',
    'mapscene.dat',
    'miscgraphics.dat',
    'miscgraphics2.dat',
    'miscgraphics3.dat',
    'prayerglow.dat',
    'prayeroff.dat',
    'prayeron.dat',
    'redstone1.dat',
    'redstone2.dat',
    'redstone3.dat',
    'rightarrow.dat',
    'scrollbar.dat',
    'sideicons.dat',
    'staticons.dat',
    'staticons2.dat',
    'steelborder.dat',
    'steelborder2.dat',
    'sworddecor.dat',
    'tradebacking.dat',
    'wornicons.dat',
    // seen in 254
    'mapmarker.dat',
    'mod_icons.dat',
    'mapedge.dat',
    // seen in 336
    'blackmark.dat',
    'button_brown.dat',
    'button_brown_big.dat',
    'button_red.dat',
    'chest.dat',
    'coins.dat',
    'headicons_hint.dat',
    'headicons_pk.dat',
    'headicons_prayer.dat',
    'key.dat',
    'keys.dat',
    'leftarrow_small.dat',
    'letter.dat',
    'number_button.dat',
    'overlay_duel.dat',
    'overlay_multiway.dat',
    'pen.dat',
    'rightarrow_small.dat',
    'startgame.dat',
    'tex_brown.dat',
    'tex_red.dat',
    'titlescroll.dat',

    // models (225 and before)
    'base_head.dat',
    'base_label.dat',
    'base_type.dat',
    'frame_del.dat',
    'frame_head.dat',
    'frame_tran1.dat',
    'frame_tran2.dat',
    'ob_axis.dat',
    'ob_face1.dat',
    'ob_face2.dat',
    'ob_face3.dat',
    'ob_face4.dat',
    'ob_face5.dat',
    'ob_head.dat',
    'ob_point1.dat',
    'ob_point2.dat',
    'ob_point3.dat',
    'ob_point4.dat',
    'ob_point5.dat',
    'ob_vertex1.dat',
    'ob_vertex2.dat',

    // versionlist (introduced in 234)
    'anim_crc',
    'anim_index',
    'anim_version',
    'map_crc',
    'map_index',
    'map_version',
    'midi_crc',
    'midi_index',
    'midi_version',
    'model_crc',
    'model_index',
    'model_version',

    // textures
    // index.dat
    '0.dat',
    '1.dat',
    '2.dat',
    '3.dat',
    '4.dat',
    '5.dat',
    '6.dat',
    '7.dat',
    '8.dat',
    '9.dat',
    '10.dat',
    '11.dat',
    '12.dat',
    '13.dat',
    '14.dat',
    '15.dat',
    '16.dat',
    '17.dat',
    '18.dat',
    '19.dat',
    '20.dat',
    '21.dat',
    '22.dat',
    '23.dat',
    '24.dat',
    '25.dat',
    '26.dat',
    '27.dat',
    '28.dat',
    '29.dat',
    '30.dat',
    '31.dat',
    '32.dat',
    '33.dat',
    '34.dat',
    '35.dat',
    '36.dat',
    '37.dat',
    '38.dat',
    '39.dat',
    '40.dat',
    '41.dat',
    '42.dat',
    '43.dat',
    '44.dat',
    '45.dat',
    '46.dat',
    '47.dat',
    '48.dat',
    '49.dat',

    // wordenc
    'badenc.txt',
    'domainenc.txt',
    'fragmentsenc.txt',
    'tldlist.txt',

    // sounds
    'sounds.dat'
];
for (let i = 0; i < oldList.length; i++) {
    if (KNOWN_NAMES.indexOf(oldList[i]) === -1) {
        KNOWN_NAMES.push(oldList[i]);
    }

    let noExtension = oldList[i].split('.')[0];
    if (KNOWN_NAMES.indexOf(noExtension) === -1) {
        KNOWN_NAMES.push(noExtension);
    }
}
console.timeEnd('Imported 2004 names');

// append ,num to all names to find sprite groups
console.time('Generated sprite group names');
let len = KNOWN_NAMES.length;
for (let i = 0; i < len; i++) {
    let name = KNOWN_NAMES[i];
    if (name.indexOf(',') === -1) {
        continue;
    }

    name = name.split(',')[0];
    for (let j = 0; j < 100; j++) {
        KNOWN_NAMES.push(`${name},${j}`);
    }
}
console.timeEnd('Generated sprite group names');

console.time('Generated hash list');
// unnamed components inherit their name from their index
for (let i = 0; i < 512; i++) {
    KNOWN_NAMES.push(`com_${i}`);
    KNOWN_NAMES.push(`com${i}`);
}

// some loosely named components can be named "a0", "a1", "a2", etc.
for (let a = 0; a < 26; a++) {
    let char = String.fromCharCode(97 + a);
    for (let b = 0; b < 26; b++) {
        KNOWN_NAMES.push(`${char}${b}`);
    }
}

// some loosely named components can be named "a", "b", "c", etc.
for (let a = 0; a < 26; a++) {
    KNOWN_NAMES.push(`${String.fromCharCode(97 + a)}`);
}

// some components are just an arbitrary number
for (let i = 0; i < 256; i++) {
    KNOWN_NAMES.push(`${i}`);
}

// map files
for (let x = 0; x < 200; x++) {
    for (let z = 0; z < 200; z++) {
        KNOWN_NAMES.push(`m${x}_${z}`);
        KNOWN_NAMES.push(`l${x}_${z}`);
        KNOWN_NAMES.push(`n${x}_${z}`);
        KNOWN_NAMES.push(`e${x}_${z}`);
        KNOWN_NAMES.push(`um${x}_${z}`);
        KNOWN_NAMES.push(`ul${x}_${z}`);
    }
}
console.timeEnd('Generated hash list');

export const KNOWN_HASHES = {};

export function hashCode(str) {
    str = str.toString();

    let hash = 0;
    str = str.toLowerCase();
    for (let i = 0; i < str.length; i++) {
        hash = ((hash << 5) + str.charCodeAt(i) - hash) | 0;
    }
    return hash;
}

console.time('Generated name hashes');
for (let i = 0; i < KNOWN_NAMES.length; i++) {
    let name = KNOWN_NAMES[i];
    let hash = hashCode(name);
    KNOWN_HASHES[hash] = name;
}
console.timeEnd('Generated name hashes');
