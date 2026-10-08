# BIOBUZZ Course Maintenance Notes

## Known Team Profile

- Four to six students in grades 9-12 with mixed programming experience
- One active programming coach
- One laptop per pair; assembled last-season REV and goBILDA practice robots
- A required launcher on the BIOBUZZ competition robot
- One powered station at a time with the active coach
- Two three-hour meetings each week for eight weeks
- Students rotate through programming and normal build, test, drive, strategy,
  and documentation work
- FTC SDK v12.0 and Java are the starting path, with the Meeting 2 Blocks
  fallback retained

## Practice robots and build progression

Use `reference/practice-and-build.html` for the two-robot plan and transfer
checklist. Preserve each old robot's source and configuration before any SDK or
hardware change. A practice pass belongs to that robot, not to the new build.
Use the robot's saved source or exact-season manufacturer documents for practice;
the 2026-2027 examples remain comparisons unless the installed assembly matches.
A custom BIOBUZZ build uses the team-adapted path with exact component documents.
Launcher controls, autonomous feeding, and bounded velocity tuning stay in scope.

## Agenda alignment

Meetings 4-13 use lesson-specific agenda links. Keep station rotations within
their listed blocks. Build work uses separate team instructions and retains its
35-minute slot. Measurement comes before distance-code constants; original
launcher baselines come before coefficient edits. Meeting 4 includes a completed
paper control example, and Meeting 13 includes a graph-paper capture/plot activity.
When updating an agenda, check its activity, prerequisites, output, and time
against the linked section rather than checking the 180-minute total alone.

## Before Delivery

- Recheck all evergreen links before each delivery, especially FTC Docs
  `en/latest`, FIRST Team Resources, REV DUO documentation, Game Manual 0, and
  the Competition Manual index.
- Recheck the pinned SDK release and Javadocs whenever the team intentionally
  changes SDK versions. Update course references as one coordinated change.
- Confirm the current competition rules and inspection checklist; do not treat
  a prior-season handout as current authority.
- Recheck moving REV Hello Robot and 2026-2027 Starter Bot pages, the goBILDA
  StarterBot guide, and their linked downloads. Confirm that headings, examples,
  named parts, APIs, screenshots, and robot revisions still match each bounded
  course citation.
- If a fixed handout uses the goBILDA example-code ZIP, keep a copy of the ZIP in
  the robot repository and check whether goBILDA has updated it before delivery.
- Treat every claim-register M entry as an evidence template until students
  perform its stated procedure during delivery. Keep its status as `pending
  delivery evidence`, and never present a pending entry as a passed physical
  result, qualification, or demonstrated student outcome.

## Hardware Details Still Unknown

The team owns many REV and goBILDA components, but brand ownership does not
identify what is installed. The exact installed motor, servo, sensor, gearbox,
Hub, and assembled robot revision control every activity. Do not infer limits,
encoder counts, configuration types, gearing, pulse ranges, wiring, or safe
mechanism travel from a generic, same-brand, or similar-looking part. The REV
2026-2027 Starter Bot and goBILDA 2026-2027 StarterBot are different robots;
never transfer names, mechanisms, constants, or control choices between them.

Once parts are selected, substitute current manufacturer documentation for each
exact model wherever a lesson uses that hardware. Record the product name,
model, configuration name, Hub port, tested direction, software range, measured
physical safe range, and source URL in the team's hardware notes.

## Optional Video Rule

Do not add a video merely to fill a resource slot. Every optional video addition
must record:

- a direct URL, not a search-results page;
- the useful timestamp or timestamp range;
- the approximate duration;
- the specific lesson benefit; and
- a version, season, SDK, or hardware caveat.

Reject a video that cannot be reconciled with current FIRST resources, pinned
SDK v12.0 behavior, or documentation for the exact installed hardware.

## Meeting 3 revision — September 26, 2026

The mentor reports that students programmed last year's robot motors and servos
in M2. M3 now reviews current game updates and teaches AprilTag telemetry through
trace, predict, measure, and one bounded edit. Its filename now matches the lesson title: `0003-read-apriltags-and-measure-distance.html`.
The M2 source/control handoff replaces the planned vendor-comparison artifact for
M4; no unperformed hardware test is marked passed. The four-page print pack is
`reference/meeting3-print-pack.html`; its code must match
`examples/Meeting3AprilTagTelemetry.java` whenever the sample changes.
The pose-only SDK 12 sample supports singles and clusters without type casts;
IDs and cluster metadata are deliberately deferred. Print a measured 4-inch
sample tag (584), not a screenshot of a game tag. Camera calibration and exact
print size determine measurement quality. Verify on hardware before delivery.

Validation: the sample passed the sibling robot project's
`:TeamCode:compileDebugJavaWithJavac` build on 2026-09-26. Lesson, print-code,
and TeamCode copies matched; local HTML links and Letter-sized print layouts
were checked. Physical camera/Stop/restart tests remain pending. The older FIRST
sample PDF and SDK 12 disagree on tag 583 size; use ID 584 at 4 inches instead.
G410 explicitly names NECTAR, while §10.5.2 uses broader FLOWER wording; preserve
that distinction and check current clarifications before changing strategy.

The printable target is included at `output/pdf/meeting3-apriltag-584.pdf`:
page 5 extracted without scaling from FIRST's official
`FTCAprilTagSDK82SamplesExtended.pdf` (downloaded 2026-09-26 from
https://ftc-docs.firstinspires.org/en/latest/_downloads/9dee926dd59f7f35e84c2b816c793fea/FTCAprilTagSDK82SamplesExtended.pdf).
Print Actual Size / 100%, with no fit-to-page; verify the black square is 4 inches.

## Meeting 4 StarterBot audit — September 30, 2026

The standard 2026–2027 goBILDA six-wheel StarterBot kit is ordered and will not be available at Meeting 4. M4 now includes
scoring/capability/gap decisions, exact measurement references, and a linked
code/calibration guide while preserving the 180-minute agenda and 35-minute
build slot for assembly preparation. The student session uses vendor documents and code for an unpowered review; physical checks wait until assembly. Code drafts in the sibling FtcRobotController repository support later tests;
this does not move general localization or PID instruction into M4.

The reviewed standard vendor ZIP contains TeleOp AND autonomous Java. Its
originals are kept separately from team adaptations. Source audit
found one-encoder completion, no drive timeout, and accumulating intake power
in the vendor auto. SDK 12.0 cluster names and explicit output units were checked
against resolved SDK sources. The M3 sample uses the shared pose fields and default units correctly. Physical calibration remains pending.
See `reference/meeting4-starterbot-calibration.html` and the robot repo's
`docs/biobuzz-starterbot.md` for scope, provenance, limits, and commissioning.

Validation: new TeamCode compiled against SDK 12.0.0; 15 pure Java aim sign,
freshness, invalid-pose and range-window checks passed. Updated lesson/reference
relative links, fragments and unique IDs passed; browser preview checked with
responsive table labels. Hardware tests remain pending.

## Meeting 5 shooter and auto revision — October 6, 2026

Meeting 5 was rewritten to be short enough for students to follow and to match what
the team has: last season's goBILDA practice robot with a webcam, no field elements,
and the BIOBUZZ kit still in the mail.

- **Robot:** `StarterRobot.ROBOT` chooses the hardware: `PRACTICE_GOBILDA` and
  `PRACTICE_REV` for last season's two practice robots, `BIOBUZZ_GOBILDA` for the new
  StarterBot. Launcher speed, speed tolerance, PIDF and ticks per inch follow the choice.
- **Shooter:** tuned by launcher speed in ticks per second, the same control the vendor
  code and our baseline use. `ShooterCalibration` holds one range-to-speed table.
  The earlier raw-power sampler and its extra flags were removed.
- **Practice field:** a tape rectangle 20 inches wide with its bottom edge 53.5 inches
  up (manual Figure 9-10), a start line 52 inches out (our estimate from the manual
  drawings), shooting marks at 18, 26 and 34 inches, and a 23 by 11 inch parking box.
- **Print packet:** `scripts/build_meeting5_print_pack.py` builds five handout pages (plan, robot checks, practice field, shooting, auto path)
  plus FIRST's eight tag sheets. Rebuild it if the worksheets change.
- **Record keeping:** across the course, worksheets no longer ask for commit hashes,
  tags, checksums, access dates or the names of students in each role, and the
  end-of-meeting handoff forms in Meetings 6-15 are short "Save your work" lists.

Nothing in Meeting 5 has been run on a robot yet. The code compiles against SDK
12.0.0 and its unit tests pass.

## Meetings 6-16 rewrite — October 6, 2026

Meetings 6-16 were rewritten in the same style as Meeting 5: a goal, a start-here
list, short safety rules, a 180-minute plan, numbered steps, worksheets without
names or code identifiers, a "Save your work" list and a short mentor section.
Titles and file names are unchanged.

Each lesson now points at a real program in the robot repository:

| Meeting | Program |
|---|---|
| 6 | TeleOp (`TeleOpBasic`) |
| 7, 8 | TeleOp with Aiming (`TeleOpAim`), which now takes its speed from the Meeting 5 table |
| 9 | Autonomous One Action (`AutoOneAction`), new |
| 10 | Tune Drive |
| 11, 12 | Autonomous Route with `Routes` and `ShooterCalibration` |
| 13 | Tune Launcher PIDF (`TuneLauncherPidf`), new |

Every team program now shows on the Driver Station. Programs that move by
themselves still wait for `MOUNTING_CONFIRMED` and `MOTION_ENABLED`, and autonomous
shooting waits for `FEED_ENABLED`. Unit tests no longer depend on numbers students
are meant to change (routes, feed time, the speed table).

Before teaching each lesson, check three things: the newest Team Update, that the
screen messages quoted in the lesson still match the code, and which robot is in
use. The 59-inch and 52-inch field distances in Meeting 11 are estimates from the
manual's drawings; measure them on a real field.

Autonomous was simplified after that rewrite. A route is now one list of `drive`,
`turn` and `aimAndShoot` steps in `Routes.java`; the robot turns to face the tags
and turns back, and no longer drives toward a tag range or replays recorded moves.
There is no `AUTO_RANGE_INCHES`, no "proven" flag on a route, and no park-time
reserve; dry run is a switch in INIT. The Meeting 9 program and the full autonomous
share the same shape (MOVE / DONE / FAULT) so students can read one from the other.

Robot code names were then made consistent. Code is in three folders (`programs`,
`robot`, `settings`). Driver Station names are TeleOp, TeleOp with Aiming, Autonomous
One Action, Autonomous Route, Tune Drive, Tune Shooter and Tune Launcher PIDF. Screens and
routes use FIRST's tag names, AUDIENCE and SCORING (the side of the field opposite the audience). Lessons 4 to 16 use the new names.
