export interface PracticeItem {
  id: string;
  name: string;
  elements: string;
  leadSignatory: string;
  leadPlate: string;
  portrait: string;
  description: string;
}

export interface Signatory {
  id: string; // e.g. "0007"
  slug: string; // e.g. "a-ren"
  name: string;
  practice: string;
  practiceSlug: string;
  status: 'Signed' | 'Open';
  plateNumber: string;
  registerId: string;
  quote: string;
  fieldNote: {
    role: string;
    desk: string;
    points: string[];
  };
  dossier: {
    medium: string;
    pressTolerances: string;
    signatoryDate: string;
    provenance: string;
    fullBio: string;
    vowExcerpt: string;
  };
  portrait: string;
}

export interface LedgerEntry {
  slug: string;
  date: string;
  title: string;
  dek: string;
  readTime: string;
  plateRef: string;
  leadParagraph: string;
  pullQuote: string;
  bodySections: { heading: string; text: string; marginalia?: string }[];
  signatory: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ImpressionRecord {
  plateNo: string;
  practice: string;
  date: string;
  pressure: string;
  stock: string;
  signatory: string;
  runStatus: string;
  kissQuality: string;
}

export const PRACTICES: PracticeItem[] = [
  {
    id: 'binders',
    name: 'Binders',
    elements: 'thread · knots · cloth',
    leadSignatory: 'A. Ren',
    leadPlate: '0007',
    portrait: '/src/assets/images/portrait_binder_satchel_1790418887399.jpg',
    description: 'Ties every signature before it is filed. Uses one knot and repeats it until it disappears.',
  },
  {
    id: 'plate',
    name: 'Plate',
    elements: 'copper · acid · press blankets',
    leadSignatory: 'M. Sorel',
    leadPlate: '0012',
    portrait: '/src/assets/images/portrait_plate_pressman_1790418900100.jpg',
    description: 'Etches cold-rolled copper with mordant baths. Regulates roller bite down to twelve microns.',
  },
  {
    id: 'script',
    name: 'Script',
    elements: 'nibs · walnut ink · ledgers',
    leadSignatory: 'C. Vane',
    leadPlate: '0031',
    portrait: '/src/assets/images/portrait_script_calligrapher_1790418912496.jpg',
    description: 'Enters the names into rag ledger books using fermented walnut husk ink and hand-split nibs.',
  },
  {
    id: 'seal',
    name: 'Seal',
    elements: 'wax · brass · ribbon',
    leadSignatory: 'I. Kael',
    leadPlate: '0089',
    portrait: '/src/assets/images/portrait_seal_artisan_1790418921579.jpg',
    description: 'Engraves matrix stamps in leaded bronze and affixes hot beeswax wafers to counter-folds.',
  },
  {
    id: 'ground',
    name: 'Ground',
    elements: 'gesso · chalk · size',
    leadSignatory: 'T. Oakes',
    leadPlate: '0142',
    portrait: '/src/assets/images/portrait_ground_artisan_1790418935659.jpg',
    description: 'Prepares heavy woven sheets with washed slaked chalk and hide size for non-bleed absorbency.',
  },
  {
    id: 'signal',
    name: 'Signal',
    elements: 'radio · carbon · field books',
    leadSignatory: 'J. Mercer',
    leadPlate: '0204',
    portrait: '/src/assets/images/portrait_signal_registrar_1790418946041.jpg',
    description: 'Monitors provenance transmissions and records hash receipts via carbon transfer papers.',
  },
];

export const SIGNATORIES: Signatory[] = [
  {
    id: '0007',
    slug: 'a-ren',
    name: 'A. REN',
    practice: 'Binders',
    practiceSlug: 'binders',
    status: 'Signed',
    plateNumber: 'Plate 0007',
    registerId: 'IC-0007',
    quote: 'Thread holds what paint cannot. That is the whole argument.',
    fieldNote: {
      role: 'Binder',
      desk: 'Night desk',
      points: [
        'Ties every signature before it is filed.',
        'Uses one knot. Repeats it until it disappears.',
      ],
    },
    dossier: {
      medium: 'Unbleached linen cord, bone folder, bookbinder hide glue',
      pressTolerances: '8.4 mm spine allowance · stitch pitch 12 mm',
      signatoryDate: 'Registered 14 August · Press: Solana',
      provenance: 'Registered on-chain as plate 0007. Countersigned at nocturnal run.',
      fullBio: 'A. Ren has kept the binder bench for eleven continuous seasons. Her hands carry traces of bone folder burnish and beeswax. Ren rejects spiral, clamp, and wire; her register filings are sewn through the fold with seven-cord Irish linen. Her vow asserts that permanence is not stubbornness, but tension correctly distributed across a spine.',
      vowExcerpt: 'I bind not to imprison the page, but to grant it a spine that stands without lean.',
    },
    portrait: '/src/assets/images/portrait_binder_satchel_1790418887399.jpg',
  },
  {
    id: '0012',
    slug: 'm-sorel',
    name: 'M. SOREL',
    practice: 'Plate',
    practiceSlug: 'plate',
    status: 'Signed',
    plateNumber: 'Plate 0012',
    registerId: 'IC-0012',
    quote: 'The copper remembers every pressure. It does not bargain with haste.',
    fieldNote: {
      role: 'Plate Maker',
      desk: 'Acid bath station',
      points: [
        'Bites Dutch mordant at 18 degrees Celsius.',
        'Calibrates bed height using single-ply vellum shims.',
      ],
    },
    dossier: {
      medium: 'Cold-rolled oxygen-free copper, Dutch mordant, wool blanket',
      pressTolerances: '12 micron etching depth · 380 kg cylinder kiss',
      signatoryDate: 'Registered 18 August · Press: Solana',
      provenance: 'Plate 0012 counter-struck onto Somerset 300gsm proof sheet.',
      fullBio: 'M. Sorel manages the etching bed and copper preparation. Working between iron oxide baths and heavy steel rollers, Sorel enforces a strict physical threshold: any plate showing roller deflection greater than a hairbreadth is scored and melted down.',
      vowExcerpt: 'The metal yields only to acid and truth. We let the copper speak before the ink arrives.',
    },
    portrait: '/src/assets/images/portrait_plate_pressman_1790418900100.jpg',
  },
  {
    id: '0031',
    slug: 'c-vane',
    name: 'C. VANE',
    practice: 'Script',
    practiceSlug: 'script',
    status: 'Signed',
    plateNumber: 'Plate 0031',
    registerId: 'IC-0031',
    quote: 'Ink is a decision. Every letter is a contract with time.',
    fieldNote: {
      role: 'Registrar',
      desk: 'North window desk',
      points: [
        'Grinds oak gall and iron sulphate weekly.',
        'Never lifts the pen mid-syllable.',
      ],
    },
    dossier: {
      medium: 'Hand-cut goose quill, fermented walnut liquor, rag vellum',
      pressTolerances: 'Line weight 0.35 mm · drying window 180 seconds',
      signatoryDate: 'Registered 22 August · Press: Solana',
      provenance: 'Enscribed directly onto master parchment roll 01.',
      fullBio: 'C. Vane is the scribe of the register ledger. Operating with hand-boiled walnut ink that deepens to warm bistre over decades, Vane translates cryptographic addresses into precise chancery cursives that can be read by human eyes three centuries hence.',
      vowExcerpt: 'Let the stroke be dry before turning. Once laid down, no word is rewritten.',
    },
    portrait: '/src/assets/images/portrait_script_calligrapher_1790418912496.jpg',
  },
  {
    id: '0089',
    slug: 'i-kael',
    name: 'I. KAEL',
    practice: 'Seal',
    practiceSlug: 'seal',
    status: 'Signed',
    plateNumber: 'Plate 0089',
    registerId: 'IC-0089',
    quote: 'A seal broken is an oath abandoned. The wafer cannot be forged.',
    fieldNote: {
      role: 'Seal Engraver',
      desk: 'Crucible bench',
      points: [
        'Maintains resin bath at precisely 82 degrees.',
        'Cuts matrices backward into solid bronze dies.',
      ],
    },
    dossier: {
      medium: 'Cast bronze matrices, Venetian sealing wax, silk ribbon',
      pressTolerances: 'Impression dwell 45 seconds · wafer diameter 32 mm',
      signatoryDate: 'Registered 02 September · Press: Solana',
      provenance: 'Impressed on plate edge with matrix stamp K-08.',
      fullBio: 'I. Kael engraves the seals that close every registered folio. Using microscopic burins under jewelers loupes, Kael cuts matrix reliefs that mechanically seal registration ribbons against illicit opening.',
      vowExcerpt: 'We seal what has been judged whole. Where the wax cools, debate ceases.',
    },
    portrait: '/src/assets/images/portrait_seal_artisan_1790418921579.jpg',
  },
  {
    id: '0142',
    slug: 't-oakes',
    name: 'T. OAKES',
    practice: 'Ground',
    practiceSlug: 'ground',
    status: 'Signed',
    plateNumber: 'Plate 0142',
    registerId: 'IC-0142',
    quote: 'Without tooth, the paper rejects the thought.',
    fieldNote: {
      role: 'Ground Maker',
      desk: 'Drying loft',
      points: [
        'Sizes sheets with rabbit-skin gelatin.',
        'Weights rag paper under 400 kg granite stones.',
      ],
    },
    dossier: {
      medium: 'Slaked champagne chalk, rabbit-skin glue, pure cotton rag',
      pressTolerances: 'Ground coat 40 gsm · surface moisture 7%',
      signatoryDate: 'Registered 11 September · Press: Solana',
      provenance: 'Ground prepared for plates 0100 through 0200.',
      fullBio: 'T. Oakes controls the tactile baseline of the entire press. Paper made under Oakes direction does not bleed or feather even when loaded with high-density lampblack pigment under atmospheric humidity.',
      vowExcerpt: 'Respect the foundation. If the ground is untrue, no ink can hold dignity.',
    },
    portrait: '/src/assets/images/portrait_ground_artisan_1790418935659.jpg',
  },
  {
    id: '0204',
    slug: 'j-mercer',
    name: 'J. MERCER',
    practice: 'Signal',
    practiceSlug: 'signal',
    status: 'Signed',
    plateNumber: 'Plate 0204',
    registerId: 'IC-0204',
    quote: 'The wire carries the vow, but the ledger anchors it forever.',
    fieldNote: {
      role: 'Signal Registrar',
      desk: 'Telemetry rack',
      points: [
        'Transcribes cryptographic blocks by telegraph key.',
        'Stores dual carbon impressions in zinc vaults.',
      ],
    },
    dossier: {
      medium: 'Direct thermal carbon paper, telegraph wire, zinc casing',
      pressTolerances: 'Block receipt latency < 400 ms · dual-register tally',
      signatoryDate: 'Registered 19 September · Press: Solana',
      provenance: 'Broadcast receipt confirmed across validator cluster.',
      fullBio: 'J. Mercer bridges the mechanical press room with the decentralized consensus engine. Every transaction is countersigned in carbon proof sheets before being committed to on-chain state.',
      vowExcerpt: 'Listen through the static. When the block confirms, impress the plate.',
    },
    portrait: '/src/assets/images/portrait_signal_registrar_1790418946041.jpg',
  },
  {
    id: '0313',
    slug: 'opening-plate',
    name: 'PLATE NO. 313',
    practice: 'Binders',
    practiceSlug: 'binders',
    status: 'Open',
    plateNumber: 'Plate 0313',
    registerId: 'IC-0313',
    quote: 'The plate waits for your hand. Ink does not enter without a signature.',
    fieldNote: {
      role: 'Unassigned Plate',
      desk: 'Active bed',
      points: [
        'Prepared with raw copper ground.',
        'Awaiting signatory countersign.',
      ],
    },
    dossier: {
      medium: 'Unstruck cold copper plate, archival blank vellum',
      pressTolerances: 'Blank registry slot · 1:1 impression capacity',
      signatoryDate: 'Open · Opening Night',
      provenance: 'Allocated for the active countersign registry on Solana.',
      fullBio: 'Plate 0313 represents the next open folio in the 444-plate register. Upon opening the register, the signatory name is recorded in the permanent on-chain ledger with single-plate provenance.',
      vowExcerpt: 'I enter the register not as spectator, but as signatory to the creed.',
    },
    portrait: '/src/assets/images/portrait_binder_satchel_1790418887399.jpg',
  },
  {
    id: '0314',
    slug: 'plate-314',
    name: 'PLATE NO. 314',
    practice: 'Plate',
    practiceSlug: 'plate',
    status: 'Open',
    plateNumber: 'Plate 0314',
    registerId: 'IC-0314',
    quote: 'Precision over speed. One mark, one name.',
    fieldNote: {
      role: 'Unassigned Plate',
      desk: 'Etching rack',
      points: ['Etched baseline matrix.', 'Blank signatory slot.'],
    },
    dossier: {
      medium: 'Etched copper plate, proof rag sheet',
      pressTolerances: 'Ready for press run · unprinted',
      signatoryDate: 'Open · Opening Night',
      provenance: 'Unstruck registry plate.',
      fullBio: 'Reserved plate awaiting signatory authorization in the upcoming press run.',
      vowExcerpt: 'One name, one mark, no second impression.',
    },
    portrait: '/src/assets/images/portrait_plate_pressman_1790418900100.jpg',
  },
];

export const CREED_VOWS = [
  {
    num: 'I',
    title: 'THE DECISION OF THE MARK',
    statement: 'Ink is a decision. Once the plate touches the dampened rag, retraction is impossible. We make no marks that require an eraser.',
  },
  {
    num: 'II',
    title: 'THE WITNESS OF THE SHEET',
    statement: 'Paper is not a backdrop; paper is a witness. It remembers humidity, roller tonnage, and the trembling of a hurried hand.',
  },
  {
    num: 'III',
    title: 'THE PURITY OF THE RUN',
    statement: 'The register counts 444 plates. Not 445. No vanity proofs for friends. No hidden reserves kept in darkness.',
  },
  {
    num: 'IV',
    title: 'ONE SIGNATURE, ONE SOUL',
    statement: 'A signatory cannot divide their loyalty among fractions. One mark, one plate, one place in the ledger.',
  },
  {
    num: 'V',
    title: 'THE DISCIPLINE OF PRACTICES',
    statement: 'Six practices divide the work. None may dilute the other. The binder does not etch; the etcher does not falsify the gall.',
  },
  {
    num: 'VI',
    title: 'PERMANENCE AS COURTESY',
    statement: 'We build for those who will handle these folios after our names are quiet. If it will not endure three hundred winters, strike it down.',
  },
];

export const LEDGER_ENTRIES: LedgerEntry[] = [
  {
    slug: 'on-the-first-plate',
    date: '14 AUGUST',
    title: 'On the first plate',
    dek: 'The copper blanket took the bite at 4:10 AM. We watched the lampblack settle into the grooves.',
    readTime: '4 min read',
    plateRef: 'Plate 0001',
    leadParagraph: 'Before the press rolled, there was a complete silence in the workshop. The windows facing the river were opaque with predawn dew, and the only heat came from the paraffin brazier where the wax wafers were being softened. When the bed moved under the roller, the sound was not mechanical; it was the muffled sigh of damp linen yielding to steel.',
    pullQuote: 'A press does not create authority. It simply records the exact instant when an oath became irreversible.',
    bodySections: [
      {
        heading: '1. The bite of Dutch mordant',
        text: 'The copper had soaked for three days in a measured bath of iron perchloride. Many modern shops rush the mordant with concentrated acids, producing ragged banks and erratic undercutting. We chose the slow bite. The lines are sheer cliffs twelve microns deep, capable of gripping ink without feathering across the cotton fibers.',
        marginalia: 'Margin note: Formula 3B. Specific gravity 1.28 at 18°C.',
      },
      {
        heading: '2. The damping of Somerset rag',
        text: 'Dry paper is hostile to deep intaglio. It fractures along the plate border. Each sheet in run 0001 was dipped in distilled rainwater, stacked between zinc plates, and weighted for twenty-four hours until the fibers relaxed into a cool, leather-like readiness.',
      },
      {
        heading: '3. The first countersignature',
        text: 'A. Ren stood at the binder bench to verify the register roll. The first plate was inspected under 10x magnification for bridge fractures. None were found. The entry was inscribed into the Solana consensus ledger at 04:18:22 UTC, marking the opening of the InkCreed register.',
        marginalia: 'Ledger Roll No. 01. Transcribed by C. Vane.',
      },
    ],
    signatory: 'M. Sorel & A. Ren',
  },
  {
    slug: 'night-press-14-august',
    date: '28 AUGUST',
    title: 'Night press, 14 August',
    dek: 'Why registration marks exist, and why we refuse to trim the deckled edge of our folios.',
    readTime: '3 min read',
    plateRef: 'Plate 0014',
    leadParagraph: 'Every pressman knows the four crop ticks—the quiet crosshair that tells whether the sheet sat straight or drifted during the kiss. In commercial offset printing, these marks are sliced away before delivery. In InkCreed, the registration ticks remain visible on every folio.',
    pullQuote: 'To hide the crop marks is to pretend the print fell out of heaven without human hands.',
    bodySections: [
      {
        heading: '1. The kiss and the dwell',
        text: 'When the roller travels over the dampened rag, there is a moment called the dwell. It lasts less than half a second, but during that interval, the viscosity of the ink must overcome the capillary suction of the paper. If the dwell is rushed, the blacks turn chalky; if held too long, the sheet sticks to the blanket.',
      },
      {
        heading: '2. Honest margins',
        text: 'Our wide margins are not decorative emptiness. They are the working room of the printmaker—the place where clean fingers grasp the sheet without marring the wet image. A collector who trims a margin destroys the physical evidence of craft.',
        marginalia: 'Width: 140mm side margins, deckle preserved.',
      },
    ],
    signatory: 'M. Sorel',
  },
  {
    slug: 'the-alloy-of-iron-gall',
    date: '09 SEPTEMBER',
    title: 'The alloy of iron gall',
    dek: 'Oak galls crushed in red wine, fermented with vitriol. Why archival permanence demands acidity.',
    readTime: '5 min read',
    plateRef: 'Plate 0042',
    leadParagraph: 'Modern chemical inks sit politely on the surface of synthetic paper like oil on glass. In fifty years, ultraviolet light breaks their bonds and they turn to phantom gray. Iron gall ink does not sit on paper; it eats into it. It forms an insoluble tannate complex that binds permanently with cellulose.',
    pullQuote: 'Permanence is not polite. It bites into the substrate so deep that fire alone can erase it.',
    bodySections: [
      {
        heading: '1. The recipe of Aleppo galls',
        text: 'We crush Aleppo oak galls to fine gravel and steep them in sour red wine for twenty days. When ferrous sulphate is introduced, the liquid shifts from amber tea to violet-black within seconds. It is the chemical instant of irrevocable commitment.',
        marginalia: 'Aleppo galls: 65% tannic acid content.',
      },
      {
        heading: '2. The registrar desk',
        text: 'At the registrar desk, C. Vane writes with quills cut from wild goose primaries. Steel nibs rust within days in gall ink; goose quills absorb the acid and remain sharp for fifty folios before recutting is required.',
      },
    ],
    signatory: 'C. Vane',
  },
];

export const IMPRESSIONS_DATA: ImpressionRecord[] = [
  { plateNo: '0001', practice: 'Plate', date: '14 Aug', pressure: '380 kg', stock: 'Somerset 300g', signatory: 'M. Sorel', runStatus: 'Countersigned', kissQuality: 'Zero deflection' },
  { plateNo: '0007', practice: 'Binders', date: '14 Aug', pressure: '375 kg', stock: 'Zerkall Ingres', signatory: 'A. Ren', runStatus: 'Countersigned', kissQuality: 'Deep tooth' },
  { plateNo: '0012', practice: 'Plate', date: '18 Aug', pressure: '390 kg', stock: 'Somerset 300g', signatory: 'M. Sorel', runStatus: 'Countersigned', kissQuality: 'Full intaglio' },
  { plateNo: '0031', practice: 'Script', date: '22 Aug', pressure: '360 kg', stock: 'Fabriano Rosaspina', signatory: 'C. Vane', runStatus: 'Countersigned', kissQuality: 'Sharp hairline' },
  { plateNo: '0089', practice: 'Seal', date: '02 Sep', pressure: '410 kg', stock: 'Cotton Rag 320g', signatory: 'I. Kael', runStatus: 'Countersigned', kissQuality: 'Wafer locked' },
  { plateNo: '0142', practice: 'Ground', date: '11 Sep', pressure: '370 kg', stock: 'Hahnemühle Bugra', signatory: 'T. Oakes', runStatus: 'Countersigned', kissQuality: 'Even matte' },
  { plateNo: '0204', practice: 'Signal', date: '19 Sep', pressure: '365 kg', stock: 'Carbon Rag 280g', signatory: 'J. Mercer', runStatus: 'Countersigned', kissQuality: 'Verified' },
  { plateNo: '0313', practice: 'Binders', date: 'Opening', pressure: '380 kg', stock: 'Somerset 300g', signatory: 'Unsigned', runStatus: 'Open Bed', kissQuality: 'Ready' },
];

export const NOTES_FAQ: FAQItem[] = [
  {
    question: 'What is a plate in InkCreed?',
    answer: 'A plate is an individual, non-fungible entry in the 444-signatory register. Each plate is etched as a single copper matrix, printed once as a proof impression, and permanently recorded on the Solana blockchain under its unique registry identifier (e.g., IC-0007). There are no duplicate impressions or derivative editions.',
  },
  {
    question: 'What is the total supply of the register?',
    answer: 'Exactly 444 plates. Never 445. No reserve allocations, no promotional tokens, and no secondary mint passes. The register closes permanently once plate 444 is countersigned.',
  },
  {
    question: 'Why Solana for the press?',
    answer: 'Solana was chosen for cryptographic finality and sub-second deterministic settlement. When a signatory countersigns a plate, the transaction hash is verified directly against the physical registry run sheet without exorbitant gas penalties.',
  },
  {
    question: 'What does "practice" mean?',
    answer: 'A practice is the workshop discipline assigned to a plate. There are six practices: Binders, Plate, Script, Seal, Ground, and Signal. Practices are never blended or hybridized. Each signatory belongs strictly to one discipline.',
  },
  {
    question: 'When does the register open?',
    answer: 'The register opens on Opening Night directly through the /register dossier. Signatories countersign plate by plate in sequential run order. 312 plates were inscribed during nocturnal proofs; 132 plates remain available.',
  },
  {
    question: 'Can I transfer or resell my plate?',
    answer: 'On-chain provenance follows standard Solana SPL token standards. However, the original countersignature in the physical ledger remains permanently tied to the initial signatory block height.',
  },
  {
    question: 'Are there whitelist spots or private sales?',
    answer: 'No. InkCreed maintains no whitelists, Discord queues, or tiered admissions. The register is open strictly by plate order to those who countersign.',
  },
  {
    question: 'Will there be a second volume or collection?',
    answer: 'No. InkCreed is a closed volume. Once the 444th plate is bound, the matrix is struck and the register is sealed.',
  },
];
