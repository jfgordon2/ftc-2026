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
