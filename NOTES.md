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
- If a fixed handout uses the mutable goBILDA example-code ZIP, retain the
  reviewed local copy and record its local filename, download date, and checksum
  in the handout notes. A stable-looking URL is not a version identifier.
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
