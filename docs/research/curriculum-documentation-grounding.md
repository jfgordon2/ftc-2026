---
title: BIOBUZZ Curriculum Claim Register
description: Source, decision, and measurement claims for the BIOBUZZ FTC curriculum.
permalink: /docs/research/curriculum-documentation-grounding.html
---

# BIOBUZZ Curriculum Claim Register

Research date: 2026-09-17

This is the mentor-facing claim register for the approved [Trace, Evaluate,
Rebuild curriculum roadmap](../../reference/meeting-roadmap.html).
It distinguishes documented facts from BIOBUZZ decisions and physical evidence.
Student-facing `Source`, `Team choice`, and `Measure it` labels link to the
matching entry. A link never substitutes for an unperformed physical test.
Each meeting keeps lowercase HTML anchor aliases immediately above its claim
table. The aliases exactly match the stable IDs used in lesson URL fragments,
so a label resolves to the table containing its named row without depending on
renderer-generated Markdown anchors.

## Delivery decisions updated September 20, 2026

The team has assembled 2025-2026 REV and goBILDA practice robots and will build a
BIOBUZZ robot with a required launcher. See the [practice and build plan](../../reference/practice-and-build.html).
These user-confirmed decisions supersede the earlier assumption of one installed
2026-2027 StarterBot in D entries and delivery examples. F entries describing
2026-2027 vendor artifacts retain their original scope; they do not describe the
old practice robots. Use each old robot's saved, reviewed source/configuration.
A modified or custom robot uses team-adapted code and exact component documents.

M4-M13 now reserve 35 minutes for build work within 180 minutes. Incomplete trials
carry forward without weakening acceptance criteria. A practice qualification
permits learning on that robot; M15-M16 require the BIOBUZZ event robot and launcher.
Transfer requires fresh identity, configuration, motor, mechanism, and route checks.
M02 mode readback happens after INIT and before Start. M06 one-press state persists
between loops. M10 movement returns a result; M11 stops the route on any result
other than REACHED. M13 keeps bounded F-then-P work, with I/D unchanged.
These are curriculum decisions and code corrections, not new FIRST rules or
claims that physical tests have passed.

## Register schema

Every numbered entry contains these fields:

| Field | Required content |
| --- | --- |
| Claim ID | Stable meeting/class sequence: `M##-F##`, `M##-D##`, or `M##-M##` |
| Claim | Exact fact, decision, measurement, or record covered by the entry |
| Class | External documented fact (F), team design decision (D), or team measurement (M) |
| Owner | Source that owns the fact, decision owner, or named team test record |
| Evidence | Deep link and version/section/class; rationale and approver; or required procedure and trial artifact |
| Scope | Meeting, vendor branch, exact part/revision, SDK, and season boundaries |
| Checked | Reviewer and date, or delivery-time reviewer slot |
| Recheck trigger | Event that invalidates or requires review of the entry |

F entries cite the source that owns the claim. D entries state BIOBUZZ's
rationale and must not be presented as FIRST or vendor requirements. Every M
entry below is an evidence template with status **pending delivery evidence**.
During delivery, the named procedure must record setup, exact configuration,
units, method, trials, result, date, student, and checker. A pending entry cannot
be presented as a passed physical result or completed student outcome.

## Source IDs

| ID | Source and authority limit |
| --- | --- |
| CM | [2026-2027 Competition Manual TU01](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html), updated 2026-09-17 and incorporating [Team Update 01](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/tu-01); owns game, match, safety, inspection, and robot-rule claims. Recheck the [season page](https://ftc-resources.firstinspires.org/ftc/archive/2027/game), later Team Updates, and Q&A. |
| FIRST | [FIRST Team Resources](https://ftc-resources.firstinspires.org/ftc/team) and [FTC Docs](https://ftc-docs.firstinspires.org/en/latest/); own current control-system, configuration, programming, troubleshooting, inspection, and event guidance. Evergreen and version-sensitive. |
| SDK | [FTC SDK v12.0](https://github.com/FIRST-Tech-Challenge/FtcRobotController/releases/tag/v12.0), tag commit `e14c2aeb33e84d4ea21697beeea9ac49557be870`, and [pinned samples](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples); own sample behavior for the selected SDK, not robot-safe constants. |
| API | [RobotCore 12.0.0 Javadocs](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/), including [`DcMotorEx`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/DcMotorEx.html); own pinned method signatures and documented units, not mechanism limits or effective settings. |
| REV | [REV 2026-2027 Starter Bot programming](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto) and [Java overview](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto/programming-onbot-java-overview); own the named REV assembly/example only. Mutable; record access date. |
| GB | [goBILDA 2026-2027 StarterBot guide](https://www.gobilda.com/ftc-starter-bot-resource-guide-2026-2027-season/) and [example ZIP](https://www.gobilda.com/content/downloads/3200-2627-0003_example-code.zip); own the exact goBILDA assembly/example only. ZIP verified 2026-09-17 as `3200-2627-0003_example-code.zip`, containing one 12,500-byte `BioBuzzStarterbotTeleop.java` TeleOp and no Autonomous file. |
| JAVA/GIT | [Oracle Java Language Basics](https://dev.java/learn/language-basics/), [Defining Methods](https://dev.java/learn/classes-objects/defining-methods/), and [GitHub About Git](https://docs.github.com/en/get-started/using-git/about-git); own language and Git facts, not BIOBUZZ sequencing or test gates. |
| PIDF-S | [FTC Docs coefficient access](https://ftc-docs.firstinspires.org/en/latest/programming_resources/shared/pidf_coefficients/pidf-coefficients.html); supplemental [GM0 Control Loops](https://gm0.org/en/latest/docs/software/concepts/control-loops.html), [GM0 SDK Motors](https://gm0.org/en/latest/docs/software/adv-control-system/sdk-motors.html), and [Ctrl Alt FTC PID](https://www.ctrlaltftc.com/the-pid-controller). FTC Docs/API own access behavior; community sources explain concepts but do not own coefficient values or guaranteed diagnoses. |

## Meeting 1: Robot Init

<span id="m01-f01"></span><span id="m01-f02"></span><span id="m01-f03"></span><span id="m01-f04"></span><span id="m01-f05"></span><span id="m01-f06"></span><span id="m01-f07"></span><span id="m01-d01"></span><span id="m01-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M01-F01 | Control Hub, Driver Station, gamepad, active configuration, deployment, and telemetry roles follow current FTC control-system guidance. | F | FIRST | [Control System Introduction](https://ftc-docs.firstinspires.org/en/latest/programming_resources/shared/control_system_intro/The-FTC-Control-System.html) and [Running an OpMode](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#running-your-opmode) | M1; current FTC control system; 2026-2027 | Curriculum review 2026-09-17 | FTC Docs, apps, firmware, or season changes |
| M01-F02 | INIT/Start/active/Stop and linear-versus-iterative lifecycle behavior is demonstrated by the pinned samples. | F | SDK | [`BasicOpMode_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/BasicOpMode_Linear.java) and [`BasicOpMode_Iterative`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/BasicOpMode_Iterative.java) | M1; SDK 12.0 | Curriculum review 2026-09-17 | SDK version changes |
| M01-F03 | `LinearOpMode` lifecycle methods follow the pinned API. | F | API | [`LinearOpMode`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/eventloop/opmode/LinearOpMode.html) | M1; RobotCore 12.0.0 | Curriculum review 2026-09-17 | SDK version changes |
| M01-F04 | REV's 2026-2027 example configuration names the six device types, ports, and configuration names shown for its Starter Bot; those assumptions apply only to a robot matching that table. | F | REV | [REV Starter Bot Configuration](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto#configuration) and [Wiring Diagram](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto#wiring-diagram) | M1; REV branch; exact named revision; 2026-2027 | Curriculum review 2026-09-17 | Vendor page/revision or installed hardware changes |
| M01-F05 | goBILDA's resource page identifies the 2026-2027 StarterBot, while the verified Java artifact supplies the iterative lifecycle assumptions; neither applies to a different revision. | F | GB | [2026-2027 StarterBot Resource Guide](https://www.gobilda.com/ftc-starter-bot-resource-guide-2026-2027-season/) and [verified example ZIP](https://www.gobilda.com/content/downloads/3200-2627-0003_example-code.zip), inspected 2026-09-17 listed in Source IDs | M1; goBILDA branch; exact named revision and verified artifact; 2026-2027 | Curriculum review 2026-09-17 | ZIP, guide, revision, or installed hardware changes |
| M01-F06 | The pinned FTC SDK v12.0 project wrapper requests Gradle 9.1.0; a project whose wrapper requests Gradle 6.6.1 is not using the pinned v12.0 wrapper. | F | SDK | [FTC SDK v12.0 `gradle-wrapper.properties`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/gradle/wrapper/gradle-wrapper.properties) | M1; project identity and first sync; SDK v12.0 | Curriculum review 2026-09-18 | SDK tag or wrapper changes |
| M01-F07 | Gradle runtime compatibility depends on both Gradle and Java versions; Java 25 support for running Gradle begins with Gradle 9.1.0, so Gradle 6.6.1 cannot run on Java 25. | F | Gradle | [Gradle Java compatibility matrix](https://docs.gradle.org/current/userguide/compatibility.html#java_runtime) | M1; Gradle sync diagnosis only | Curriculum review 2026-09-18 | Gradle compatibility guidance changes |
| M01-D01 | Use a prepared harmless telemetry change, explicit no-actuator safe-state ritual, pair roles, pre-INIT live/clear confirmation, a routine Driver Station operator, and a separate Stop owner with immediate Driver Station Stop access and authority to press it without permission. | D | BIOBUZZ | Rationale: expose the complete deployment lifecycle without introducing powered complexity and protect the initialization stage, when user code already executes; approved by the curriculum design. | M1; both branches; prepared telemetry-only OpMode | Curriculum review 2026-09-17 | Safety workflow, prepared OpMode, or course design changes |
| M01-M01 | Record robot manufacturer/revision, installed devices, active configuration, exact names, deployment result, observed no-motion behavior while the prepared program containing no actuator commands runs, and observed Stop response. | M | M1 robot identity and deployment record | **Status: pending delivery evidence.** Procedure: inspect labels and the active configuration; record a trial ID and supported-test setup; verify the prepared source contains no hardware lookup or actuator commands; deploy it; position the routine operator and independent Stop owner; call live/clear before INIT; observe INIT and active telemetry and the robot for motion; press Stop; then record exact configuration, units where applicable, method, result, date, student/operator, observer, Stop owner, and checker. | M1; installed robot; prepared telemetry-only OpMode; no individual motor-response claim | Delivery reviewer: pending | Robot/configuration/source changes or repeated delivery |

## Meeting 2: Making the Motor Move

<span id="m02-f01"></span><span id="m02-f02"></span><span id="m02-f03"></span><span id="m02-f04"></span><span id="m02-f05"></span><span id="m02-f06"></span><span id="m02-d01"></span><span id="m02-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M02-F01 | On the Driver Station, a team can open Configure Robot, select or create the robot configuration, select the actual Hub and motor port, create or edit the port's DC motor device with the exact configured motor type and an exact case-sensitive descriptive name, save the configuration, and verify it is active on the main screen; the Java `hardwareMap.get` string must exactly match that configured device name. | F | FIRST | [Creating a configuration with the Driver Station](https://ftc-docs.firstinspires.org/en/latest/hardware_and_software_configuration/configuring/getting_started/getting-started.html#creating-a-configuration-file-using-the-driver-station), [Configuring a DC Motor](https://ftc-docs.firstinspires.org/en/latest/hardware_and_software_configuration/configuring/configuring_dc_motor/configuring-dc-motor.html#configuring-a-dc-motor-instructions), [Saving and activating the configuration](https://ftc-docs.firstinspires.org/en/latest/hardware_and_software_configuration/configuring/saving_config/saving-config.html#saving-the-configuration-information-instructions), and [Examining the OpMode structure](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#examining-the-structure-of-your-opmode) | M2; current control system | Curriculum review 2026-09-17 | FTC Docs or configuration changes |
| M02-F02 | Variable assignment, numeric literals, method calls, and a simple condition follow Java language behavior. | F | Oracle | [Variables](https://dev.java/learn/language-basics/declaring-variables/), [primitive values](https://dev.java/learn/language-basics/primitive-types/), [expressions/statements](https://dev.java/learn/language-basics/expressions-statements-blocks/), and [control flow](https://docs.oracle.com/javase/tutorial/java/nutsandbolts/flow.html) | M2; configured FTC Java level | Curriculum review 2026-09-21 | FTC Java level or sample changes |
| M02-F03 | `DcMotor` direction and power behavior follows the pinned API. `getMode()` reports the motor's current `DcMotor.RunMode`, the setting that controls how the motor controller interprets commands. | F | API | [`DcMotor`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/DcMotor.html) | M2; RobotCore 12.0.0 | Curriculum review 2026-09-17 | SDK version changes |
| M02-F04 | The pinned SDK v12.0 samples demonstrate the `LinearOpMode` structure, motor mapping and power calls, and use inherited `gamepad1.x` as an X-button input. The SDK supplies `gamepad1` to an OpMode and updates it from the controller assigned as Driver/User 1. The local `Meeting2OneMotor` lesson sample uses that structure with its own exact-name placeholder, pre-Start mode display, held-X one-motor control, release-to-zero branch, and final zero command. | F | SDK | [`BasicOpMode_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/BasicOpMode_Linear.java), [`BasicOmniOpMode_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/BasicOmniOpMode_Linear.java), and FIRST's [OnBot Java OpMode tutorial](https://github.com/FIRST-Tech-Challenge/FtcRobotController/wiki/Creating-and-Running-an-Op-Mode-%28OnBot-Java%29) | M2; SDK 12.0; sample hardware names and values excluded | Curriculum review 2026-09-21 | SDK version, input API, or lesson sample changes |
| M02-F05 | REV's example table identifies UltraPlanetary HD Hex drive motors for its named Starter Bot; it does not establish the installed motor's encoder, gearing, wiring, or limits until the model is matched to exact product documentation. | F | REV | [REV Starter Bot Configuration](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto#configuration) and [Wiring Diagram](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto#wiring-diagram); record the exact installed product link during inventory. | M2; REV branch; exact named example until installed model is verified | Curriculum review 2026-09-17; product match pending | Part, assembly, or vendor-page changes |
| M02-F06 | goBILDA motor type, encoder, gearing, wiring, and product limits are claimable only after the installed goBILDA model is matched to its exact linked product documentation. | F | GB | [goBILDA StarterBot Resource Guide](https://www.gobilda.com/ftc-starter-bot-resource-guide-2026-2027-season/) is the candidate assembly index; record the exact installed product-page link during inventory. | M2; goBILDA branch; exact installed motor/gearbox revision only | Curriculum review 2026-09-17; product match pending | Part, assembly, or vendor-page changes |
| M02-D01 | The mentor installs and checks the simplified one-motor OpMode; students replace only its quoted `hardwareMap.get` name with an exact name from Meeting 1 or the active Driver Station configuration. The sample commands `0.25` power only while gamepad 1's X button is held and commands zero when X is released. Test one motor at a time on supports; seed a harmless compiler error; use the fresh-task readiness gate, majority threshold, and prepared Blocks fallback; record and compare each motor's current run mode without switching modes, block later drive tests on an unexplained mismatch, and retain the baseline for Meetings 9-10. | D | BIOBUZZ | Rationale: isolate cause, give beginning students one meaningful code edit, teach a clear held-input/release-output relationship, keep a reliable competition path, and preserve a read-only run-mode baseline before later mode teaching; approved by curriculum design and run-mode progression review. | M2; both branches | Curriculum review 2026-09-21 | Sample, readiness criteria, fallback, run-mode progression, or later mode-teaching changes |
| M02-M01 | Record location, Hub/port, exact configured name copied into `hardwareMap.get`, configured type, current mode returned by `getMode()`, completed-row mode comparison, moved wheel/side, observed direction, X-held output, X-release zero, Stop response, and each pair's gate evidence. | M | M2 motor map and readiness record | **Status: pending delivery evidence.** Procedure: identify one motor, secure a supported test, and check the exact configuration. Map only the selected motor by its exact name, command it to zero, and display its current mode before `waitForStart()`. Repeat for each motor, compare the completed rows, and block later drive tests until every mismatch is explained. For each trial, predict the held and released behavior, hold gamepad 1 X briefly to request `0.25` power, release X to command zero, press Stop, and record setup, exact configuration, method, result, date, student, checker, and gate outcome. | M2; exact installed drivetrain | Delivery reviewer: pending | Wiring, controller, configuration, part, run-mode, sample, or repeated-gate changes |

## Meeting 3: Read AprilTags and Measure Distance

<span id="m03-f01"></span><span id="m03-f02"></span><span id="m03-f03"></span><span id="m03-d01"></span><span id="m03-m01"></span>

Revised 2026-09-26 after the mentor reported M2 motor/servo programming progress.
This replaces the scheduled vendor comparison; preserve actual M2 source and
control evidence for M4 instead of assuming that comparison occurred.

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M03-F01 | SDK 12 single and cluster detections share ftcPose; casts are needed for subclass metadata, not pose telemetry. | F | SDK | Local SDK 12.0.0 ConceptAprilTagEasy and [FIRST cluster guide](https://ftc-docs.firstinspires.org/en/latest/tech_tips/tech-tips/tech-tip-apriltag-clusters/tech-tip-apriltag-clusters.html) | Pose-only sample; no target IDs or selection | 2026-09-26 | SDK/sample change |
| M03-F02 | SDK range measures the camera X–Y plane; the sample defaults use inches/degrees and sample tag 584 is 4 inches wide. | F | SDK | SDK 12.0.0 AprilTagPoseFtc and AprilTagGameDatabase sources; [library guide](https://ftc-docs.firstinspires.org/en/latest/apriltag/vision_portal/apriltag_library/apriltag-library.html) | Known tag size and suitable camera calibration required | 2026-09-26 | Camera, resolution, calibration, library or print change |
| M03-F03 | FIRST lists TU02; G410 explicitly restricts NECTAR timing (section 10.5.2 uses broader wording; clarification pending), G417 restricts hive manipulation, and hive tags move with cells. | F | FIRST | [Current game materials](https://ftc-resources.firstinspires.org/ftc/game), manual sections 1.7.4, 9.6, 9.9 and G410/G417/G418 | BIOBUZZ; recheck Monday including Q&A status | 2026-09-26 | Manual/update/Q&A change |
| M03-D01 | Teach a stationary camera-only lab with one display edit and one supervised station; keep the M2 working program separate. | D | Team | Mentor-requested M3 pivot; lesson and print pack | No automatic motion, aiming or localization | 2026-09-26 | Student readiness or hardware change |
| M03-M01 | Record predictions, tape/pose readings, repeat readings, missing-target behavior, Stop/restart, diff and commit or blocker; retain M2 source/control handoff. | M | Team | M3 print pack | **Status: pending delivery evidence.** Record camera/configuration, tag size, code, date, students and checker during the actual station test. A software build is not a hardware pass. | Delivery reviewer pending | Code/camera/print/setup change |

## Meeting 4: Decide What Our Robot Should Do

<span id="m04-f01"></span><span id="m04-f02"></span><span id="m04-d01"></span><span id="m04-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M04-F01 | Meeting 4 must derive objectives, match periods, scoring, and action-specific legal constraints from the current manual rather than a vendor summary; this entry asserts no unstated game rule. | F | CM | Competition Manual TU01, updated 2026-09-17 and incorporating [Team Update 01](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/tu-01): [section 8 Game Overview](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#_Toc240538713), [10.1 MATCH Overview](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#_Toc240538727), [10.4 MATCH Periods](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#_Toc240538730), [10.5 Scoring](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#_Toc240538731), and rules [G407](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#G407), [G408](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#G408), [G409](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#G409), [G410](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#G410), [G412](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#G412), [G413](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#G413), [G417](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#G417), and [G418](https://ftc-resources.firstinspires.org/ftc/archive/2027/game/cm-html#G418) | M4; 2026-2027 Competition Manual TU01; later updates and Q&A pending | Curriculum review 2026-09-17 | Later Team Update, Q&A, or manual revision |
| M04-F02 | Available gamepad fields and methods follow the pinned API. | F | API | [`Gamepad`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/Gamepad.html) | M4; RobotCore 12.0.0 | Curriculum review 2026-09-17 | SDK version/controller changes |
| M04-D01 | Classify actions as required/optional/unavailable; assess workload, proportional/held/one-press behavior, conflicts, release, recovery, feedback, and telemetry; choose one or two gamepads from that evidence. | D | BIOBUZZ/team | Rationale: derive controls from current game and installed capability rather than convention; team approval is required. | M4; installed robot and current strategy | Curriculum review 2026-09-17 | Strategy, mechanism, rule, or operator changes |
| M04-M01 | Record installed mechanism availability and the approved action/control map with rationale. | M | M4 action-map record | **Status: pending delivery evidence.** Procedure: inventory mechanisms, walk each current game action through the decision prompts, resolve conflicts, approve the map, and record setup, configuration, units where used, method, decisions/trials, result, date, student, and checker. | M4; installed robot; 2026-2027 | Delivery reviewer: pending | Robot, rules, strategy, or controls change |

## Meeting 5: Tune the Shooter and Build an Auto Path

Meeting 4 chose robot objectives. Meeting 5 tunes launcher speed and builds one
autonomous path on last season's goBILDA practice robot, using a tape rectangle on a
wall for the hive opening and tape on the floor for the start line and parking box.
The 180-minute plan keeps one powered robot; the 35-minute build block is spent
building the tape practice field.

<span id="m05-f01"></span><span id="m05-f02"></span><span id="m05-f03"></span><span id="m05-f04"></span><span id="m05-f05"></span><span id="m05-d01"></span><span id="m05-d02"></span><span id="m05-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M05-F01 | Launcher speed is requested and measured in encoder ticks per second with `setVelocity`/`getVelocity`; AprilTag pose gives bearing in degrees and camera-frame range in inches. | F | SDK/FIRST | SDK 12.0.0 Vision and RobotCore; [pose interpretation](https://ftc-docs.firstinspires.org/en/latest/apriltag/understanding_apriltag_detection_values/understanding-apriltag-detection-values.html); [DcMotorEx](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/DcMotorEx.html) | SDK 12.0.0; no accuracy guarantee | 2026-10-06 | SDK or camera mounting changes |
| M05-F02 | Last season's goBILDA StarterBot uses `left_drive`, `right_drive`, `launcher`, `left_feeder` and `right_feeder` with a 1125 ticks/s launcher target; the 2026-2027 StarterBot uses an intake, two corner servos and a `windmill` feeder with a 1250 ticks/s target. Both drive with 537.7-tick motors on 96 mm wheels. Last season's REV Starter Bot uses `leftDrive`, `rightDrive`, `flywheel`, `coreHex` and `servo`, a 1300 ticks/s near-shot speed fed from 1200, and 420 ticks per wheel turn. | F | goBILDA/REV | goBILDA example code for the [2025-2026](https://www.gobilda.com/ftc-starter-bot-resource-guide-decode/) and [2026-2027](https://www.gobilda.com/ftc-starter-bot-resource-guide-2026-2027-season/) StarterBots; [REV 2025-26 Starter Bot programming pages](https://docs.revrobotics.com/ftc-kickoff-concepts/decode-2025-26/programming-teleop) | Standard two-drive-motor builds only | 2026-10-06 | A modified robot or new vendor code |
| M05-F03 | LEAVE is 3 points for no longer touching the field wall; PARK is 5 points for being at least partly in the LOADING ZONE; both are judged at the end of the 30-second AUTO. The LOADING ZONE is about 23 by 11 inches. | F | FIRST | [TU03 manual](https://ftc-resources.firstinspires.org/ftc/game/cm-html/BIOBUZZ%20Competition%20Manual%20-%20TU03.htm) sections 9.3, 10.1, 10.5.4 and Table 10-2 | 2026-2027 season | 2026-10-06 | Team Update or Q&A |
| M05-F04 | The upward CELL opening is about 20 inches wide and spans 53.5 to 65.6 inches above the TILES; tags are 3.25 inches square in clusters of four under each CELL; the red audience-side CELL starts the match facing up. | F | FIRST | TU03 manual section 9.6.2, Figures 9-10, 9-16 and 10-2; [printable targets](https://ftc-resources.firstinspires.org/ftc/field); [print notes](../../assets/print/biobuzz-apriltags-source.md) | Print at 100% | 2026-10-06 | Team Update or new target artwork |
| M05-D01 | Tune launcher speed in 25 ticks/s steps, five shots per setting, one change at a time; store circled rows in one range-to-speed table that interpolates inside its rows and refuses outside them. | D | BIOBUZZ | [Lesson](../../lessons/0005-build-and-structure-our-teleop.html); matches the speed control already used by the vendor code and our baseline | Practice robot and tape wall | 2026-10-06 | Robot, launcher, balls or target changes |
| M05-D02 | With no field, use a tape wall rectangle at the real opening height, a 52-inch start line (our estimate from the manual drawings), shooting marks at 18, 26 and 34 inches, and a 23 by 11 inch parking box placed where the room allows. | D | Mentor/BIOBUZZ | [Setup guide](../../reference/meeting5-shooter-auto-guide.html) | Classroom stand-in; speeds, camera ranges and route numbers are measured again on a real hive and field | 2026-10-06 | Field access or a different room layout |
| M05-M01 | Students measure the speed that gives at least four hits in five at each mark, ticks per inch over 24 inches, a 90-degree turn, and whether the auto path ends in the box three times in a row. | M | Students | Meeting 5 worksheets | The robot and layout used that day | At delivery | Any change to robot, layout or code constants |

## Meeting 6: Build the Mechanism Controls

Rewritten October 6, 2026 to match the simplified lesson.

<span id="m06-d01"></span><span id="m06-f01"></span><span id="m06-f02"></span><span id="m06-f03"></span><span id="m06-f04"></span><span id="m06-f05"></span><span id="m06-f06"></span><span id="m06-f07"></span><span id="m06-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M06-F01 | Gamepad sticks and triggers are analog and buttons are true/false; the vendor baseline subtracts left trigger from right for the intake and feeds only when the launcher is fast enough. | F | FIRST/SDK/vendor | [Gamepad Javadoc](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/Gamepad.html); goBILDA example code | 2026-2027 season, SDK 12.0.0 | 2026-10-06 | Team Update, SDK or vendor code change |
| M06-D01 | Add controls one at a time: speed readout, held slow mode, one-press launcher toggle; the feeder still needs the bumper. | D | BIOBUZZ | Lesson 6 | The robot in use that day | 2026-10-06 | The team changes the plan |
| M06-M01 | What each control did on press, release and conflict. | M | Students | Meeting 6 worksheets | The robot and setup used that day | At delivery | Any change to the robot or its constants |

## Meeting 7: Integrate and Debug TeleOp

Rewritten October 6, 2026 to match the simplified lesson.

<span id="m07-d01"></span><span id="m07-d02"></span><span id="m07-d03"></span><span id="m07-f01"></span><span id="m07-f02"></span><span id="m07-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M07-F01 | AprilTag bearing is degrees left or right of straight ahead and range is inches in the camera frame; a camera with no view of the selected tags gives no reading. | F | FIRST/SDK/vendor | [FTC Docs pose values](https://ftc-docs.firstinspires.org/en/latest/apriltag/understanding_apriltag_detection_values/understanding-apriltag-detection-values.html) | 2026-2027 season, SDK 12.0.0 | 2026-10-06 | Team Update, SDK or vendor code change |
| M07-D01 | Debug with five steps: observe, guess, check, change one thing, conclude. The aiming TeleOp takes its speed from the Meeting 5 table. | D | BIOBUZZ | Lesson 7 | The robot in use that day | 2026-10-06 | The team changes the plan |
| M07-M01 | Whether driving, aiming and shooting work together; what fixed the planted fault. | M | Students | Meeting 7 worksheets | The robot and setup used that day | At delivery | Any change to the robot or its constants |

## Meeting 8: Qualify TeleOp

Rewritten October 6, 2026 to match the simplified lesson.

<span id="m08-d01"></span><span id="m08-d02"></span><span id="m08-d03"></span><span id="m08-d04"></span><span id="m08-f01"></span><span id="m08-f02"></span><span id="m08-f03"></span><span id="m08-f04"></span><span id="m08-f05"></span><span id="m08-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M08-F01 | TELEOP lasts two minutes; a HIVE TIP is 20 points; ending TELEOP at least partly in the LOADING ZONE is 5; a robot may control at most four scoring elements. | F | FIRST/SDK/vendor | TU03 manual section 10.1, Table 10-2, rule G407 | 2026-2027 season, SDK 12.0.0 | 2026-10-06 | Team Update, SDK or vendor code change |
| M08-D01 | Pass means three runs in a row with no Stop, no crash, the agreed hits and a parked finish; the count restarts after a failure or a code change. | D | BIOBUZZ | Lesson 8 | The robot in use that day | 2026-10-06 | The team changes the plan |
| M08-M01 | Each timed run on the score sheet. | M | Students | Meeting 8 worksheets | The robot and setup used that day | At delivery | Any change to the robot or its constants |

## Meeting 9: Autonomous Starts With One Action

Rewritten October 6, 2026 to match the simplified lesson.

<span id="m09-d01"></span><span id="m09-f01"></span><span id="m09-f02"></span><span id="m09-f03"></span><span id="m09-f04"></span><span id="m09-f05"></span><span id="m09-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M09-F01 | AUTO lasts 30 seconds; the robot starts touching the field wall with four POLLEN; moving off the wall is LEAVE, 3 points. | F | FIRST/SDK/vendor | TU03 manual section 10.1, section 10.5.4, rule G304 | 2026-2027 season, SDK 12.0.0 | 2026-10-06 | Team Update, SDK or vendor code change |
| M09-D01 | An autonomous command is started once and checked every loop, and gives up after 4 seconds. | D | BIOBUZZ | Lesson 9 | The robot in use that day | 2026-10-06 | The team changes the plan |
| M09-M01 | Distance and time for three runs from the same mark. | M | Students | Meeting 9 worksheets | The robot and setup used that day | At delivery | Any change to the robot or its constants |

## Meeting 10: From Motor Rotations to Distance

Rewritten October 6, 2026 to match the simplified lesson.

<span id="m10-d01"></span><span id="m10-f01"></span><span id="m10-f02"></span><span id="m10-f03"></span><span id="m10-f04"></span><span id="m10-f05"></span><span id="m10-f06"></span><span id="m10-f07"></span><span id="m10-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M10-F01 | Both goBILDA StarterBots use 537.7-tick drive motors on 96 mm wheels, about 45.3 ticks per inch; the REV practice robot counts 420 ticks per turn of a 3-inch wheel, about 44.6. | F | FIRST/SDK/vendor | goBILDA example code for both seasons | 2026-2027 season, SDK 12.0.0 | 2026-10-06 | Team Update, SDK or vendor code change |
| M10-D01 | Keep the measured ticks per inch when it differs from the calculation by more than 0.5; turns finish on the IMU heading. | D | BIOBUZZ | Lesson 10 | The robot in use that day | 2026-10-06 | The team changes the plan |
| M10-M01 | Ticks, inches and seconds for each 24-inch run; squareness of each 90-degree turn. | M | Students | Meeting 10 worksheets | The robot and setup used that day | At delivery | Any change to the robot or its constants |

## Meeting 11: Compose the Autonomous Route

Rewritten October 6, 2026 to match the simplified lesson.

<span id="m11-d01"></span><span id="m11-f01"></span><span id="m11-f02"></span><span id="m11-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M11-F01 | Start rules (G304); LEAVE 3 and PARK 5 judged at the end of AUTO; LOADING ZONE about 23 by 11 inches; the hive centre lines are 25.5 inches apart. | F | FIRST/SDK/vendor | TU03 manual rule G304, sections 9.3 and 10.5.4, Figure 9-10 | 2026-2027 season, SDK 12.0.0 | 2026-10-06 | Team Update, SDK or vendor code change |
| M11-D01 | Choose the route by points and time. The program stops at 28 seconds and holds back 4 seconds per parking step plus 7 before shooting. The 59-inch and 52-inch tape distances are our estimates from the drawings. | D | BIOBUZZ | Lesson 11 | The robot in use that day | 2026-10-06 | The team changes the plan |
| M11-M01 | Where each empty run ended and how long it took. | M | Students | Meeting 11 worksheets | The robot and setup used that day | At delivery | Any change to the robot or its constants |

## Meeting 12: Add and Tune Autonomous Game Actions

Rewritten October 6, 2026 to match the simplified lesson.

<span id="m12-d01"></span><span id="m12-f01"></span><span id="m12-f02"></span><span id="m12-f03"></span><span id="m12-f04"></span><span id="m12-f05"></span><span id="m12-f06"></span><span id="m12-f07"></span><span id="m12-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M12-F01 | A HIVE TIP needs the hive to move to its other stable state; only launching into the upward CELL may cause it; each robot starts with four POLLEN. | F | FIRST/SDK/vendor | TU03 manual section 10.5.1, rules G304 and G417 | 2026-2027 season, SDK 12.0.0 | 2026-10-06 | Team Update, SDK or vendor code change |
| M12-D01 | Shoot in autonomous only with a proven route, a speed table for this robot and the feed switch on; tune only the feed time. | D | BIOBUZZ | Lesson 12 | The robot in use that day | 2026-10-06 | The team changes the plan |
| M12-M01 | Balls out, hits, finish position and time for each run. | M | Students | Meeting 12 worksheets | The robot and setup used that day | At delivery | Any change to the robot or its constants |

## Meeting 13: Tune Launcher Velocity With PIDF

Rewritten October 6, 2026 to match the simplified lesson.

<span id="m13-d01"></span><span id="m13-d02"></span><span id="m13-f01"></span><span id="m13-f02"></span><span id="m13-f03"></span><span id="m13-f04"></span><span id="m13-f05"></span><span id="m13-f06"></span><span id="m13-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M13-F01 | The launcher motor holds speed with P and F coefficients set through the SDK; goBILDA's starting values are 300/10 (2025-2026) and 40/12.5 (2026-2027); REV's code keeps the Hub's built-in values. | F | FIRST/SDK/vendor | [FTC Docs PIDF](https://ftc-docs.firstinspires.org/en/latest/programming_resources/shared/pidf_coefficients/pidf-coefficients.html); goBILDA example code | 2026-2027 season, SDK 12.0.0 | 2026-10-06 | Team Update, SDK or vendor code change |
| M13-D01 | Change F, then P, one step at a time; agree what “better” means first; keep a change only if clearly better; leave I and D at zero. | D | BIOBUZZ | Lesson 13 | The robot in use that day | 2026-10-06 | The team changes the plan |
| M13-M01 | Time to reach speed, lowest speed in a shot and time to recover for each run. | M | Students | Meeting 13 worksheets | The robot and setup used that day | At delivery | Any change to the robot or its constants |

## Meeting 14: Reliability and Failure Recovery

Rewritten October 6, 2026 to match the simplified lesson.

<span id="m14-d01"></span><span id="m14-d02"></span><span id="m14-d03"></span><span id="m14-f01"></span><span id="m14-f02"></span><span id="m14-f03"></span><span id="m14-f04"></span><span id="m14-m01"></span><span id="m14-m02"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M14-F01 | Self-Inspect reports whether the Driver Station and Robot Controller are ready for inspection; FTC Docs list common faults. | F | FIRST/SDK/vendor | [Self-Inspect](https://ftc-docs.firstinspires.org/en/latest/hardware_and_software_configuration/self_inspect/new-self-inspect.html); [troubleshooting](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/troubleshooting_common_issues/troubleshooting-common-issues.html) | 2026-2027 season, SDK 12.0.0 | 2026-10-06 | Team Update, SDK or vendor code change |
| M14-D01 | Practice seven harmless planted faults; a fix is finished only when the failed thing has been run again. | D | BIOBUZZ | Lesson 14 | The robot in use that day | 2026-10-06 | The team changes the plan |
| M14-M01 | What fixed each fault and how many minutes it took. | M | Students | Meeting 14 worksheets | The robot and setup used that day | At delivery | Any change to the robot or its constants |

## Meeting 15: Match Simulation and Event Readiness

Rewritten October 6, 2026 to match the simplified lesson.

<span id="m15-d01"></span><span id="m15-d02"></span><span id="m15-f01"></span><span id="m15-f02"></span><span id="m15-f03"></span><span id="m15-m01"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M15-F01 | A match is 30 seconds AUTO, an 8-second pause and 2 minutes TELEOP; a drive team is up to four people with at most one adult; NECTAR may enter FLOWERS only in the last 60 seconds. | F | FIRST/SDK/vendor | TU03 manual sections 10.1 and 10.2, Table 10-2, rule G410 | 2026-2027 season, SDK 12.0.0 | 2026-10-06 | Team Update, SDK or vendor code change |
| M15-D01 | Three full practice matches without coaching; every job has a backup who has done it; the code that played them is the event code. | D | BIOBUZZ | Lesson 15 | The robot in use that day | 2026-10-06 | The team changes the plan |
| M15-M01 | One row per practice match. | M | Students | Meeting 15 worksheets | The robot and setup used that day | At delivery | Any change to the robot or its constants |

## Meeting 16: Capstone Demo and Handoff

Rewritten October 6, 2026 to match the simplified lesson.

<span id="m16-d01"></span><span id="m16-d02"></span><span id="m16-d03"></span><span id="m16-f01"></span><span id="m16-f02"></span><span id="m16-f03"></span><span id="m16-f04"></span><span id="m16-f05"></span><span id="m16-f06"></span><span id="m16-m01"></span><span id="m16-m02"></span>

| Claim ID | Claim | Class | Owner | Evidence | Scope | Checked | Recheck trigger |
| --- | --- | --- | --- | --- | --- | --- | --- |
| M16-F01 | Building and deploying follow the FTC Android Studio workflow; cloning gives a fresh copy of a repository. | F | FIRST/SDK/vendor | [FTC Docs](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html); [GitHub Docs](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository) | 2026-2027 season, SDK 12.0.0 | 2026-10-06 | Team Update, SDK or vendor code change |
| M16-D01 | Every student takes a solo turn; the mentor does not touch the keyboard; the practice change never stays on the robot. | D | BIOBUZZ | Lesson 16 | The robot in use that day | 2026-10-06 | The team changes the plan |
| M16-M01 | What each student could do alone; whether the fresh copy built. | M | Students | Meeting 16 worksheets | The robot and setup used that day | At delivery | Any change to the robot or its constants |

## Register maintenance rules

1. Continue each meeting/class sequence from `01` without gaps; never reuse an
   ID for a different claim.
2. Split an entry when the owner, vendor branch, assembly, SDK, season, or
   recheck trigger differs.
3. Populate F entries with the owning deep link and precise scope; do not use a
   community explanation as authority for rules, SDK behavior, or coefficients.
4. Populate D entries with rationale and approver; do not attribute them to
   FIRST, the SDK, or a vendor.
5. Keep M entries at **pending delivery evidence** until the stated physical or
   individual procedure is performed and checked. Documentation alone cannot
   pass an M entry.
6. Derived calculations retain every documented and measured input's claim ID.
   Acceptance remains a D criterion evaluated by M trials.
7. REV and goBILDA paths remain separate. Never copy names, behavior, geometry,
   powers, timing, thresholds, or PIDF coefficients between assemblies.
8. Keep each lowercase claim anchor alias in the same meeting section as its
   row. Validation must compare the complete anchor set with the complete claim
   ID set before publication.
