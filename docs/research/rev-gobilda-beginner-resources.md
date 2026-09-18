---
title: REV and goBILDA Resources for a Beginner FTC Java Curriculum
description: Vendor-scoped resources for the BIOBUZZ beginner FTC Java curriculum.
permalink: /docs/research/rev-gobilda-beginner-resources.html
---

# REV and goBILDA Resources for a Beginner FTC Java Curriculum

Research date: 2026-09-16

## Scope and source policy

This note evaluates four user-provided, first-party vendor resources and directly linked first-party material for use in the 16-meeting BIOBUZZ Java curriculum. REV is authoritative for the named REV products and its own examples; goBILDA is authoritative for its StarterBot design and example. Neither vendor is the competition authority or the owner of the FTC SDK. Authority follows domain: current competition rules own legality, pinned SDK source/Javadocs own SDK behavior, and exact manufacturer documentation owns product specifications, wiring, and assembly. Record and resolve genuine overlaps before publishing a claim, consistent with the course's [source policy](../../RESOURCES.md#biobuzz-course-resources) and [supplemental-source rubric](ftc-programming-syllabus-resources.html#supplemental-source-quality-rubric).

The REV pages are evergreen GitBook pages and can change in place. The two StarterBot resources explicitly target the 2026-2027 BIOBUZZ season. Page findings below use the 2026-09-16 research date; the mutable goBILDA ZIP was downloaded and verified separately on 2026-09-17.

## Summary comparison

| Resource | What it teaches | Language and environment | Assumed hardware | Scope | Best curriculum fit |
| --- | --- | --- | --- | --- | --- |
| [REV Hello Robot welcome](https://docs.revrobotics.com/duo-control/hello-robot-blocks/welcome) and its linked pathway | Configuration, OpModes, gamepads, isolated motor/servo/sensor tests, drivetrain control, timers, and encoders | Parallel **Blocks** and **OnBot Java** tutorials. The welcome explicitly says Hello Robot is not an Android Studio tutorial. | REV Control Hub and Driver Hub; Part 1's test bed uses a Core Hex Motor, Smart Robot Servo, REV Touch Sensor, Color Sensor V3, and battery; Part 2 uses the REV Class Bot V2/differential drivetrain examples. | Evergreen general REV control-system curriculum, not season-specific | Meetings 1-4, 6-7, and 9-10; sensors only as optional extension material |
| [REV 2026-2027 Starter Bot programming walkthrough](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto) and linked pages | Configuration/wiring, arcade drive, subsystem methods, intake and servo controls, flywheel velocity gating, telemetry, and a timed autonomous launch sequence | Downloadable **Blocks** and **OnBot Java**; the [Java overview](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto/programming-onbot-java-overview) prints complete TeleOp and autonomous Java and says the Blocks walkthrough also applies to Java. | The exact 2026-2027 REV Starter Bot: two UltraPlanetary/HD Hex drive motors, Core Hex intake, UltraPlanetary/HD Hex flywheel, one CR Smart Robot Servo, one positional Smart Robot Servo, Control Hub/Driver Hub, and specified names/ports. | Explicitly 2026-2027 BIOBUZZ game and robot | Meetings 3-9 and 12-13; selected Meeting 10 comparison only |
| [goBILDA example-code ZIP](https://www.gobilda.com/content/downloads/3200-2627-0003_example-code.zip) | A complete iterative TeleOp: lifecycle methods, hardware mapping, split arcade drive, proportional intake, subsystem methods, telemetry, encoder velocity control, velocity-gated feeding, and custom PIDF | One **Java TeleOp** file, `BioBuzzStarterbotTeleop.java`, using SDK `OpMode`; no Blocks and no Autonomous file | Exact goBILDA 2026-2027 StarterBot: skid-steer drive, intake motor, two corner-intake CR servos, windmill CR servo, encoder-equipped launcher, and its exact configuration names/directions | Explicitly 2026-2027 BIOBUZZ StarterBot; downloaded ZIP is mutable/unversioned | Meetings 1-8 and 12-13 as a reading/integration example |
| [goBILDA 2026-2027 StarterBot Resource Guide](https://www.gobilda.com/ftc-starter-bot-resource-guide-2026-2027-season/) | A build launch point: intended game tasks, required components, assembly PDF, CAD, and example-code download | The page is not a programming tutorial; its linked code is the Java TeleOp above | 2026-2027 goBILDA FTC Starter Kit (or named upgrade pack) plus a REV Control Hub; drop-center 6WD, Gecko-wheel intake, storage/feeding, and launcher mechanism | Explicitly 2026-2027 BIOBUZZ design | Preseason hardware context; Meetings 6, 8, 10-11, 14-16 for exact-robot inspection, tuning, and handoff |

## 1. REV Hello Robot

### Content, language, and hardware

The [welcome page](https://docs.revrobotics.com/duo-control/hello-robot-blocks/welcome) describes Hello Robot as an introduction to REV Control System configuration, programming, sensors, motors, and servos. It offers two parallel paths: beginner-oriented Blocks and text-based OnBot Java. It labels Android Studio an advanced option but explicitly says Hello Robot itself is unavailable for Android Studio. That distinction matters for BIOBUZZ: Java ideas and SDK calls can transfer, but editor, build, deployment, source layout, imports, and version-control workflow cannot be taught from this resource.

The tutorial has unusually useful beginner progression:

- [Part 1](https://docs.revrobotics.com/duo-control/hello-robot-java/part-1) starts with one component at a time on a test bed, includes "Quick Check" reflection prompts, and explains testing as a way to isolate device, wire, port, and program failures. It names the exact REV devices and configuration names and warns that moving components must be secured.
- [Part 2](https://docs.revrobotics.com/duo-control/hello-robot-java/part-2) moves to a functional differential-drive Class Bot V2, distinguishes differential and omnidirectional drivetrains, and introduces tank and arcade controls. The example assumes UltraPlanetary HD Hex drive motors, a Core Hex arm, a REV Touch Sensor, and its listed configuration names.
- [Part 3](https://docs.revrobotics.com/duo-control/hello-robot-java/part-3) progresses from `ElapsedTime` to drivetrain and arm encoders, tick-to-distance conversion, target position, velocity, turning, and range limits.
- The linked Blocks and OnBot Java tables cover the same conceptual route. Blocks may be useful as a visual explanation, but "Show Java" output and OnBot Java examples are not substitutes for the course's pinned Android Studio/SDK 12.0 source and Javadocs.

### Pedagogical strengths

- It starts with a constrained test bed instead of a full robot, making input, decision, output, and failure isolation visible.
- It uses a gradual component-to-subsystem-to-autonomous sequence that closely parallels the BIOBUZZ course.
- Named hardware and configuration tables make the otherwise hidden relationship among wiring, robot configuration, `hardwareMap`, and code concrete.
- Quick checks encourage prediction and explanation rather than pure copying.
- Parallel Blocks/Java pages let a mentor use a block diagram to explain control flow before returning to the course's Java implementation.

### Meeting placement

| Meetings | Recommended use |
| --- | --- |
| 1 | Optional visual introduction to configuration, OpModes, and Control Hub/Driver Hub operation. Keep Android Studio deployment instruction in FIRST/SDK sources. |
| 2-4 | Component-level motor, gamepad, telemetry, servo, and conditional examples. Translate concepts, not Blocks syntax or tutorial-specific names. |
| 6-7 | Use the secured test-bed model, touch sensor as a limit, and fault-isolation rationale to support mechanism safety and evidence-based debugging. |
| 9-10 | Use Part 3's timer and encoder progression as a second explanation beside the pinned Java samples. The existing syllabus already selects the Blocks `ElapsedTime` page for Meeting 9. |
| Optional extension | Use the touch/color sensor read-display-decide sequence only if the installed sensor is the named REV model. Sensors are not assigned to Meeting 13. |

Hello Robot adds little to Meetings 5, 8, and 11-16 compared with the approved integration, launcher, PIDF, and event-readiness sources.

### Cautions

- It is manufacturer-authored instruction for a REV stack, not a generic hardware contract. Ports, configuration types, encoder counts, gearing, servo behavior, directions, and safe limits must match the installed parts.
- It is evergreen and unpinned. Recheck pages, screenshots, apps, firmware assumptions, and API calls before delivery.
- Blocks is a conceptual bridge only. OnBot Java is Java source compiled on the robot, but it is not the course's Android Studio/Git workflow.
- Class Bot V2 drive and arm geometry are examples, not a recipe for BIOBUZZ hardware.
- REV documentation does not determine legal hardware, field behavior, match procedure, or current game rules.

## 2. REV 2026-2027 Starter Bot programming material

### Content, language, and hardware

The [landing page](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto) supplies an exact configuration/wiring table and gamepad map for the 2026-2027 REV Starter Bot, plus Blocks and OnBot Java TeleOp/autonomous downloads. The linked [OnBot Java overview](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto/programming-onbot-java-overview) exposes the complete Java programs.

The walkthrough breaks the implementation into teachable slices:

- [Overview](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto/programming-overview): initialization, one reversed drive motor, `RUN_USING_ENCODER`, a `targetVelocity`, a small main loop, subsystem methods, and flywheel-velocity telemetry.
- [Subsystems](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto/programming-subsystems): arcade drive; intake/reverse with bumper and trigger input; and edge-triggered positional-servo commands.
- [Flywheel](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto/programming-flywheel): manual forward/reverse, velocity-gated feeder behavior, jam-recovery controls, and explicit zero power when no branch is active.
- [Autonomous](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto/programming-auto): an optional blocking delay, timed low-power drive, explicit drive stop, timed flywheel operation, `opModeIsActive()` loop guards, and velocity-gated intake/feeding.

### Pedagogical strengths

- The code and diagrams represent a whole current-season robot, so students can trace a gamepad event through a named method to observable mechanism behavior.
- The short main loop and four named subsystem methods are a strong Meeting 5 code-reading example.
- Manual overrides alongside an automatic feed sequence make mechanism recovery and driver intent visible.
- The same behavior is shown in Blocks and Java, enabling control-flow comparison without changing the physical robot.
- The pages repeatedly tell teams to test and tune timing and velocity ranges for their own robot and strategy.

### Meeting placement

| Meetings | Recommended use |
| --- | --- |
| 3-4 | Read only arcade-drive math and one input/conditional path; compare hardware names and controls with the team's implementation. |
| 5 | Annotate the four subsystem method calls and one method definition. Do not replace the course's smaller extract-a-method exercise with the full file. |
| 6-7 | Trace flywheel/feeder safety behavior, manual recovery, explicit zero outputs, and telemetry. Verify physical limits and failure behavior on the exact robot. |
| 8 | Use as an integration-reading specimen or, only on the exact REV Starter Bot, a candidate baseline after adaptation and controlled tests. |
| 9 | Compare the timed autonomous sequence with the pinned SDK timed-auto sample. Preserve `opModeIsActive()` and explicit stops; test all constants. |
| 10-11 | Use flywheel velocity feedback only as a comparison; it is not drivetrain distance/position or route-composition instruction. |
| 12 | Use the Autonomous flywheel sequence for the named REV launcher values and velocity gate. Add BIOBUZZ's guarded action and named explicit-zero shutdown rather than treating the example as complete. |
| 13 | The source publishes no PIDF tuple. Read back the exact controller/mode baseline before bounded PIDF work; otherwise use the REV path for observation and graphing only. |

It is not a strong direct source for Meetings 1-2 or 14-16.

### Cautions

- The configuration names, port numbers, motor directions, `targetVelocity = 1160`, servo endpoints, powers, velocity tolerances, 700 ms drive, optional 10 s delay, and 15 s launch loop are robot/strategy assumptions, not defaults for another robot.
- The walkthrough is closely coupled to the 2026-2027 game vocabulary, mechanism, starting orientation, and objective. Archive it as a season example after 2026-2027 rather than silently carrying it forward.
- The autonomous page uses `sleep` for an optional start delay. It is acceptable only for that documented Autonomous wait and does not replace Meeting 12's active checks, timeout, abort, telemetry, and explicit shutdown.
- The code uses OnBot Java. If adapted into Android Studio, start from the course's pinned SDK project and independently verify API availability, imports, configured Java level, hardware map, build, and deployment.
- A complete vendor program can hide beginner understanding. Prefer tracing or extracting one concept before permitting adaptation.
- Current FIRST rules and official field/match documents control legality and strategy, even when a vendor page calls behavior appropriate for this season.

## 3. goBILDA example-code ZIP

### Inspected artifact

The [ZIP](https://www.gobilda.com/content/downloads/3200-2627-0003_example-code.zip), downloaded and verified on 2026-09-17 as `3200-2627-0003_example-code.zip` with SHA-256 `aadbb82cfeaef37b6fbf814589956c5305efc0734ce5ef7df23dbfa996882ca3`, contained exactly one 12,500-byte file: `BioBuzzStarterbotTeleop.java`. It is an MIT-licensed Java iterative TeleOp for the goBILDA 2026-2027 StarterBot. There is no Autonomous program, Blocks file, project/Gradle metadata, configuration file, or version manifest in the archive.

The source teaches or demonstrates:

- `OpMode` lifecycle separation through `init()`, `init_loop()`, `start()`, `loop()`, and `stop()`;
- exact `hardwareMap` names for two drive motors, intake motor, launcher `DcMotorEx`, and three CR servos;
- drive directions, `BRAKE`, CR-servo directions, and initial zero outputs;
- split arcade drive in `arcadeDrive(forward, rotate)`;
- proportional intake using right trigger minus left trigger;
- subsystem methods and deliberately deferred output assignment so `launch()` can modify `intakePower` before it is written once per loop;
- encoder velocity control with `RUN_USING_ENCODER`, `setVelocity`, `getVelocity`, target/minimum thresholds, and custom PIDF coefficients;
- nonblocking, continuously evaluated velocity-gated feeding; and
- drivetrain telemetry.

These facts come from the downloaded first-party file linked by the [goBILDA resource guide](https://www.gobilda.com/ftc-starter-bot-resource-guide-2026-2027-season/). Because the ZIP URL has no visible version identifier and can be replaced in place, instructors should retain a reviewed local copy or checksum if they decide to use it in a fixed handout.

### Pedagogical strengths

- Comments explain intent, signal ranges, order of operations, held-button semantics, raw encoder units, and the reason for velocity-gated feeding.
- The iterative lifecycle gives Meeting 1 a useful contrast with BIOBUZZ's primarily linear starter code.
- The one-write-per-loop intake design is a good example of calculating desired state before commanding hardware.
- The launch method is a compact, nonblocking input-plus-feedback decision that keeps drivetrain updates running.
- The file is complex enough for integration reading but remains one source file with clearly named methods.

### Meeting placement

| Meetings | Recommended use |
| --- | --- |
| 1-2 | Read lifecycle and hardware-map sections only; compare iterative lifecycle with the pinned SDK samples. |
| 3-5 | Trace trigger/stick inputs, arcade-drive arithmetic, output calls, and method boundaries. |
| 6-7 | Inspect explicit neutral branches, initialization, directions, telemetry, and comments about encoder wiring. Do not infer mechanism safety from code alone. |
| 8 | On the exact goBILDA StarterBot, use as an integration reference after reviewing and adapting every hardware/configuration assumption. |
| 10-11 | The launcher code is a comparison only; it does not teach drivetrain distance, `RUN_TO_POSITION`, or route composition. |
| 12 | Use launcher velocity feedback and the nonblocking feed gate only for the exact matching assembly. The ZIP supplies no Autonomous file, so BIOBUZZ must build and explicitly shut down its own guarded action. |
| 13 | Use the displayed `(40, 0, 0, 12.5)` tuple only as the matching goBILDA assembly's rollback baseline for bounded comparisons, never as a universal tuple or a value to copy between assemblies. |

It has no useful direct coverage for Meetings 9-11 or 14-16 beyond bounded
comparison and generic code reading.

### Cautions

- The fixed `LAUNCHER_TARGET_VELOCITY` (1250 ticks/s), minimum (1200), 28-tick motor-shaft conversion explanation, and PIDF `(40, 0, 0, 12.5)` are specific assumptions. Encoder resolution at the motor shaft is not the same as output-shaft counts after gearing, and a custom PIDF tuned for one launcher must not be copied to another mechanism without exact-hardware review and controlled testing.
- The drive calculation sends `forward + rotate` and `forward - rotate` directly without explicit normalization/clipping in the example. Students should follow the team's tested drive policy and pinned SDK API behavior rather than infer that this is the universal arcade-drive implementation.
- `BRAKE`, motor/servo direction, names, powers, and the `intakePower += 0.5` interaction all depend on this mechanism and wiring.
- The file is a complete season robot solution, not a staged beginner lesson. Assign bounded traces or adaptations rather than "install and run."
- The source identifies a skid-steer goBILDA StarterBot and cannot be treated as instructions for the REV Starter Bot merely because both serve the same season game.
- The MIT "as is" license is permission to reuse, not evidence of safety, compatibility, legality, or current SDK support.

The REV Autonomous walkthrough similarly supports only its displayed launcher
values (`1160`, `+/-50`, and the 15-second loop) on the named REV assembly. It
does not establish a universal PIDF tuple, does not publish a REV PIDF baseline,
and does not replace BIOBUZZ's requirement to issue and test named explicit-zero
commands for every launcher output used by the adapted action.

## 4. goBILDA StarterBot Resource Guide

The [resource guide](https://www.gobilda.com/ftc-starter-bot-resource-guide-2026-2027-season/) describes a 2026-2027 BIOBUZZ StarterBot with drop-center 6WD, a Gecko-wheel intake, capacity for four POLLEN, and a launcher. It says a StarterBot is a robot built from its required components with the linked assembly instructions, code, and CAD, rather than a single kit purchase. It requires the named 2026-2027 Starter Kit (or upgrade pack) and a REV Control Hub and also links a separate mecanum variant.

Its beginner value is primarily integration context, not Java instruction:

- A known mechanical design, assembly PDF, CAD, and matching code reduce the number of unknowns for a rookie team.
- Students can connect software names and behaviors to visible mechanisms and use the assembly material to identify exact actuators, wiring paths, transmission, and service points.
- The guide gives builders and programmers a shared reference during Meetings 6, 8, 10-11, and reliability/handoff work in Meetings 14-16.

Use it only when the team actually built this version or needs a clearly labeled comparative case. The product page and assembly package do not establish Java concepts, safe mechanism limits, inspection compliance, or competitive readiness. A vendor claim that the design performs named game tasks is not a test result for the team's assembled robot. The mecanum variant, upgrade pack, substitutions, wear, assembly tolerances, wiring, and team modifications can invalidate the linked code's assumptions.

## Omissions in the existing curriculum

The comparison was intentionally limited to [RESOURCES.md](../../RESOURCES.md), the existing [resource map](ftc-programming-syllabus-resources.html), and lesson resource sections.

- `RESOURCES.md` links only the top-level REV DUO documentation and already gives the correct general cautions about exact model/current software, Blocks-versus-Java syntax, and FIRST authority. It does not identify Hello Robot's complete Blocks/OnBot Java learning path, either 2026-2027 StarterBot resource, or the goBILDA code.
- The resource map retains bounded Hello Robot timer and sensor references as topic notes. Timer material can supplement Meeting 9; sensor material is optional extension work and is not assigned to Meeting 13. The notes also record the parallel OnBot Java pathway and test-bed pedagogy without replacing Android Studio/SDK sources.
- No inspected curriculum file names the REV 2026-2027 Starter Bot programming walkthrough, the goBILDA StarterBot guide, or its ZIP. This leaves useful current-season whole-robot reading examples undocumented, especially for Meetings 5, 8, 10-12.
- The omission is not a curriculum correctness defect. Existing lessons deliberately start from pinned official SDK samples and team-tested code, which are better universal baselines. These vendor materials should be added, if at all, as optional and hardware-gated explanations or integration specimens rather than replacing existing authoritative sources.

## Recommended adoption rules

1. Use Hello Robot pages for small visual explanations and component-level labs; use the matching OnBot Java page when Java text matters, then return to Android Studio and pinned SDK 12.0 references.
2. Use a StarterBot example only after identifying which physical StarterBot is present. "REV 2026-2027 Starter Bot" and "goBILDA 2026-2027 StarterBot" are different robots with incompatible names, mechanisms, constants, and control choices.
3. Assign a narrow trace before adaptation: hardware/configuration input, Java decision, commanded output, physical assumption, stop behavior, and value that requires measurement.
4. Copy examples into `TeamCode`; never replace or edit SDK sample sources. Review imports/API calls against the pinned SDK and retain the team's safety, diff, test-card, and evidence gates.
5. Record vendor page access date, exact robot revision, code-file identity/checksum, installed part numbers, configuration, and every changed constant. Revalidate after any vendor-page, SDK, firmware, wiring, gearing, wheel, or mechanism change.
6. Treat all game terminology, timing, field position, capacity, strategy, and legality statements as season-sensitive. Resolve them against the current Competition Manual and live FIRST resources, not a vendor walkthrough.
