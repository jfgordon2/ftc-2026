# Resource Map for the BIOBUZZ FTC Programming Syllabus

Research date: 2026-09-16

This map supports the approved [Trace, Evaluate, Rebuild curriculum](../superpowers/specs/2026-09-17-trace-evaluate-rebuild-curriculum-design.md). It prioritizes resources maintained by FIRST, the FIRST Tech Challenge Technology Team, GitHub, Oracle, and the installed hardware manufacturer, then adds selected community explanations. "Official" means that the cited source owns the product or platform. "Supplemental" identifies non-authoritative teaching material. "Recommendation" means a teaching or team-workflow choice made for BIOBUZZ; it is not represented as FIRST policy.

## Currency and link policy

- The current official repository identifies its release as **FTC SDK 12.0 for the 2026-2027 BIOBUZZ season**. Its README requires **Android Studio Narwhal 3 Feature Drop or later**. Use the [v12.0 release](https://github.com/FIRST-Tech-Challenge/FtcRobotController/releases/tag/v12.0) and read its [Release Information](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0#release-information) before setup.
- SDK source citations below are pinned to the immutable [`v12.0` tag](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0), not `master`. The exact tag resolved to commit `e14c2aeb33e84d4ea21697beeea9ac49557be870` on the research date.
- FTC Docs uses `en/latest` and describes itself as under active development. Those links are intentionally evergreen and therefore **version-sensitive**. Check them again at preseason setup, after any SDK update, and before competition. Game rules supersede FTC Docs.
- FTC SDK Javadoc links are pinned to `12.0.0`, for example [`DcMotor`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/DcMotor.html), [`Gamepad`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/Gamepad.html), [`Servo`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/Servo.html), and [`Telemetry`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/org/firstinspires/ftc/robotcore/external/Telemetry.html). Use the [Javadoc artifact index](https://javadoc.io/doc/org.firstinspires.ftc) to find other SDK modules/classes. `latest` Javadoc URLs are version-sensitive and should not be used in a fixed handout.
- The [official Team Resources page](https://ftc-resources.firstinspires.org/ftc/team) is season-sensitive. On the research date it pointed to 2026-2027 resources and the [2027 Inspection Checklist](https://ftc-resources.firstinspires.org/ftc/archive/2027/event/inspection-check). The older 2026 inspection URL embedded in one FTC Docs Tech Tip is stale for BIOBUZZ.

## Supplemental-source quality rubric

Supplemental resources below are teaching aids, **not authorities** for SDK
behavior, legal hardware, inspection, or game rules. Authority follows domain,
not a global ranking: the current Competition Manual owns legality, rules,
inspection, and event procedure; pinned SDK source/Javadocs own SDK behavior;
and current documentation for the exact installed hardware owns product
specifications, wiring, and assembly. Record genuine overlaps and resolve them
through the current FIRST or manufacturer channel before publishing the claim.

- **Prefer:** current manufacturer documentation for the exact installed part; then established FTC educational projects with maintained, inspectable text/code; then a durable video from a known vendor, team, or educator when motion or a physical procedure is materially clearer on video.
- **Require:** a direct URL, a named section or segment, a concrete lesson benefit, and a stated age/version/hardware limitation. For a selected video, also record its approximate duration and the useful timestamp range.
- **Reject:** search-result/SEO summaries, unattributed code, advice that cannot be reconciled with current FIRST sources, and resources that merely repeat the official item already listed for the meeting.
- **Recheck:** all unpinned pages before preseason delivery and after an SDK, firmware, or hardware change. Game Manual 0 and REV GitBook URLs are evergreen and may change in place. The free *Learn Java for FTC* repository reported testing with SDK 11.2 on the research date, so its code must be compared with SDK 12.0 before use.
- **Hardware rule:** use vendor-specific instructions only when BIOBUZZ has the named device. Confirm the exact model and product-page specifications; similar-looking REV, goBILDA, and other parts can have different ranges, gearing, encoder counts, wiring, or configuration types.
- **Video choice:** no video was selected merely to fill a slot. The text resources below are easier to version-check, scan during a meeting, and compare with source code; add a video later only when it passes the same rubric.

## Preseason mentor setup

Complete this before Meeting 1 so infrastructure failures do not consume student time.

1. **Update and pair the supported control system.** FTC Docs, [Before You Start: Supported Control System Setup](https://ftc-docs.firstinspires.org/en/latest/programming_resources/android_studio_java/before_you_start/before-you-start.html#supported-control-system-setup), identifies a REV Control Hub and Driver Hub as the officially supported setup. Follow its [Before Writing Code](https://ftc-docs.firstinspires.org/en/latest/programming_resources/android_studio_java/before_you_start/before-you-start.html#before-writing-code) checklist for wiring, naming, pairing, firmware/apps, configuration, project, and USB deployment. The checklist also warns that Android Studio installs the entire Robot Controller app and that RC/DS software must be from the same season.
2. **Install a compatible Android Studio.** The SDK 12.0 [Requirements](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0#requirements) section says Narwhal 3 Feature Drop or later. FTC Docs' [Installing Android Studio](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/installing_android_studio/Installing-Android-Studio.html) page is version-sensitive and still contains a Ladybug/JDK 17 warning; prefer the current SDK README when they differ.
3. **Obtain team starter code.** FIRST's [Fork and Clone: Forks vs. Clones](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html#forks-vs-clones) recommends a team fork and explains the upstream relationship; [Getting Started](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html#getting-started-quick-start-guide) gives the fork/clone steps. The official repository's [Downloading the Project](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0#downloading-the-project) also permits clone, ZIP, or release archive. For a season-stable start, fork the official repository, create the team development branch from tag `v12.0`, clone the team fork to every laptop, and add the FIRST repository as `upstream` as shown in [Remotes](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html#remotes). The tag-based branch is a **BIOBUZZ recommendation**; FIRST documents tags and upstream updates but does not prescribe this exact branch policy.
4. **Keep team code in the supported location.** FIRST's [Creating and Running an OpMode: TeamCode Module](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#teamcode-module) reserves `TeamCode/src/main/java/org/firstinspires/ftc/teamcode` for team classes. The pinned [TeamCode readme](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/readme.md) explains sample naming, copying samples, and removing/commenting `@Disabled`. FIRST's [Fork and Clone: Best Practices](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html#best-practices) says not to edit the `FtcRobotController` directory.
5. **Create and activate hardware configuration.** Follow [Configuring Your Hardware](https://ftc-docs.firstinspires.org/en/latest/hardware_and_software_configuration/configuring/index.html), specifically [Getting Started](https://ftc-docs.firstinspires.org/en/latest/hardware_and_software_configuration/configuring/getting_started/getting-started.html), the relevant motor/servo/sensor pages, and [Saving the Configuration Information](https://ftc-docs.firstinspires.org/en/latest/hardware_and_software_configuration/configuring/saving_config/saving-config.html). Device names are case-sensitive when used with `hardwareMap.get`, as documented in [Examining the Structure of Your OpMode](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#examining-the-structure-of-your-opmode).
6. **Prove the build/deploy path.** Follow [Building and Installing Your OpMode](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#building-and-installing-your-opmode): power the Control Hub from a charged 12 V battery, connect the laptop to the Hub's USB-C port (not Mini USB), select the target, and run `TeamCode`. Then follow [Running Your OpMode](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#running-your-opmode) through INIT, Start, telemetry, and Stop.

## Meeting mappings

### REV/goBILDA teaching map

Use only the bounded section named for a meeting. These are optional vendor
explanations and exact-robot specimens, not parallel curricula. REV and goBILDA
StarterBots have different mechanisms, names, constants, and control choices.
Use the owning source for each domain as defined above. These vendor teaching
aids own only their named products and examples.

Vendor source key: [REV Hello Robot Blocks welcome](https://docs.revrobotics.com/duo-control/hello-robot-blocks/welcome)
and its [OnBot Java path](https://docs.revrobotics.com/duo-control/hello-robot-java/part-1);
[REV 2026-2027 Starter Bot programming](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto);
[goBILDA 2026-2027 StarterBot Resource Guide](https://www.gobilda.com/ftc-starter-bot-resource-guide-2026-2027-season/);
and the mutable [goBILDA example-code ZIP](https://www.gobilda.com/content/downloads/3200-2627-0003_example-code.zip).
The ZIP was downloaded and verified on 2026-09-17 as
`3200-2627-0003_example-code.zip`, SHA-256
`aadbb82cfeaef37b6fbf814589956c5305efc0734ce5ef7df23dbfa996882ca3`.
It contained one 12,500-byte Java TeleOp file,
`BioBuzzStarterbotTeleop.java`, and no Autonomous file.

| Approved meeting | Bounded REV use | Bounded goBILDA use |
| --- | --- | --- |
| 1. Robot Init | Identify the exact REV robot; use Hello Robot only for Control/Driver Hub and configuration context, and the matching Starter Bot program for `LinearOpMode` lifecycle comparison. | Identify the exact goBILDA revision; read only `init()`, `init_loop()`, `start()`, `loop()`, and `stop()` as the iterative lifecycle specimen. |
| 2. Making the Motor Move | Use the exact-name and one-secured-motor portions of Hello Robot Java Part 1 only with its named parts. | Read declarations and `hardwareMap.get` calls as name-matching evidence, not as a one-motor recipe. |
| 3. Compare the StarterBot Programs | Trace the complete REV TeleOp's linear lifecycle, left-stick arcade drive, and named intake/flywheel/feeder/pollen-poker methods. | Trace the complete goBILDA TeleOp's iterative lifecycle, split-stick drive, trigger intake, launcher, windmill, and intake-assist behavior. Run only the installed robot's matching path. |
| 4. Decide What Our Robot Should Do | Use the matching program only to inventory available actions and current controls; the team's action map remains a decision based on game and workload evidence. | Apply the same bounded inventory rule; vendor controls do not decide one-versus-two gamepads or team strategy. |
| 5. Build and Structure Our TeleOp | Preserve verified REV names/directions and linear lifecycle while rebuilding the team-owned `drive(double forward, double turn)` method. | Preserve verified goBILDA names/directions and iterative lifecycle while rebuilding the same team-owned drive intent. |
| 6. Build the Mechanism Controls | Use only matching REV mechanism names, source values, safe-release branches, and recovery concepts; verify every physical limit. | Use only matching launcher, windmill, intake, and corner-intake concepts; source values are not proof of physical safety. |
| 7. Integrate and Debug TeleOp | Use exact REV telemetry and component documentation to instrument a predicted fault. | Use launcher/drivetrain telemetry and encoder comments as evidence prompts, not as a complete troubleshooting procedure. |
| 8. Qualify TeleOp | Use the matching REV program only to define available capability; team qualification still requires the team's controlled routine and records. | Use the matching goBILDA program under the same boundary; vendor code does not prove team-owned parity or qualification. |
| 9. Autonomous Starts With One Action | Compare the REV timed sequence with pinned `RobotAutoDriveByTime_Linear`; retain active checks and explicit drive stop. | No vendor equivalent: the ZIP contains no Autonomous file. Use the pinned SDK sample and team measurements. |
| 10. From Motor Rotations to Distance | Hello Robot encoder sections may clarify terms, but exact drivetrain products and team measurements own conversion inputs. | The launcher encoder code does not teach drivetrain distance, odometry, or `RUN_TO_POSITION`; use exact drivetrain sources and measurements. |
| 11. Compose the Autonomous Route | Use pinned SDK composition patterns; REV launcher material is not a route source. | No vendor Autonomous exists; compose measured team drive actions rather than inventing a vendor route. |
| 12. Add and Tune Autonomous Game Actions | The Autonomous walkthrough supports displayed REV values `1160`, `+/-50`, 15 seconds, feed `1`, and stop `0` only for the named assembly. BIOBUZZ must add and test named explicit-zero shutdown for every used output. | The TeleOp supports displayed target `1250`, minimum `1200`, PIDF `(40,0,0,12.5)`, windmill `1`, and assist `0.5` only for the exact assembly. It supplies concepts, not an Autonomous implementation; BIOBUZZ must add guarded action logic and named shutdown. |
| 13. Tune Launcher Velocity With PIDF | REV publishes no PIDF tuple. Read back the matching controller/mode baseline before a bounded F-then-P comparison; otherwise observe and graph only. | Use `(40,0,0,12.5)` only as the verified matching assembly's rollback baseline. Never transfer it to REV or another launcher. |
| 14. Reliability and Failure Recovery | Use exact REV component/control-system documents for safe simulated faults, service points, and recovery checks. | Use the matching assembly/part documents for safe simulated faults and service checks; unrehearsed recovery remains unproven. |
| 15. Match Simulation and Event Readiness | Use exact-product documents for post-run inspection and packing; FIRST controls event procedure and legality. | Apply the same boundary to the exact goBILDA revision and installed parts. |
| 16. Capstone Demo and Handoff | Use exact installed-model documents for inventory and recovery rehearsal; substituted hardware needs its own source. | Use matching revision/part documents for inventory and service; Git/FIRST sources own code restoration and deployment. |

The REV example establishes only its displayed Meeting 12 launcher values. It
does not establish a universal PIDF tuple and does not replace BIOBUZZ's
explicit-shutdown requirement. The goBILDA tuple likewise remains scoped to its
exact matching assembly and verified artifact.

## Retained topic source notes

The notes below preserve valid source analysis from the earlier map. They are
topic references only; the numbered table above controls meeting placement.

### OpMode lifecycle and robot initialization

**Official support**

- [Control System Introduction](https://ftc-docs.firstinspires.org/en/latest/programming_resources/shared/control_system_intro/The-FTC-Control-System.html), sections **The Driver Station** and **The Robot Controller**, supplies the Control Hub/Driver Hub mental model.
- [Creating and Running an OpMode: Examining the Structure](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#examining-the-structure-of-your-opmode) identifies `@TeleOp`, `runOpMode()`, hardware initialization, telemetry, `waitForStart()`, and `while (opModeIsActive())`. [Running Your OpMode](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#running-your-opmode) shows INIT, Start, telemetry, and Stop.
- SDK samples [`BasicOpMode_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/BasicOpMode_Linear.java) and [`BasicOpMode_Iterative`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/BasicOpMode_Iterative.java) are the exact lifecycle references. Use the linear sample for the syllabus vocabulary; compare the iterative sample's `init`, `init_loop`, `start`, `loop`, and `stop` only if useful.
- [TeamCode readme: Creating your own OpModes](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/readme.md#creating-your-own-opmodes) explains where samples live, how to copy one, and how `@Disabled` controls Driver Station visibility.

**BIOBUZZ recommendation:** Mentor-copy `BasicOpMode_Linear` into TeamCode, rename it, leave it disabled until the physical safety check is complete, and reduce it to status telemetry. Lifecycle cards and the spoken safety callouts are local teaching/safety practices, not official FIRST procedures.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [LinearOpMode vs OpMode](https://gm0.org/en/latest/docs/software/getting-started/linear-opmode-vs-opmode.html), sections **LinearOpMode Methods** and **OpMode Methods**. The side-by-side lifecycle vocabulary reinforces the card-sorting exercise and makes INIT/Start/loop/Stop easier to compare. Caveat: this is community-maintained and links its sample directory to the moving SDK `master` branch; use the pinned v12.0 samples above for exact code.

### Variables, hardware lookup, and one-motor output

**Official support**

- [Creating and Running an OpMode: Modifying Your OpMode to Control a Motor](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#modifying-your-opmode-to-control-a-motor) introduces a `double`, joystick assignment, `DcMotor.setPower`, and telemetry. Its preceding structure section documents `hardwareMap.get(DcMotor.class, "motorTest")` and exact configuration-name matching.
- Oracle's [Creating Primitive Type Variables](https://dev.java/learn/language-basics/primitive-types/) and [Expressions, Statements and Blocks](https://dev.java/learn/language-basics/expressions-statements-blocks/) are the first-party Java references.
- SDK [`BasicOpMode_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/BasicOpMode_Linear.java) demonstrates hardware mapping, direction, `setPower`, and telemetry. The pinned [`DcMotor`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/DcMotor.html) API is the exact method reference.
- [Troubleshooting Common Issues: invalid number](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/troubleshooting_common_issues/troubleshooting-common-issues.html#user-code-threw-an-uncaught-exception-number-xxx-is-invalid) states the legal motor power range is -1 to 1 and points to the source line in logs.

**BIOBUZZ recommendation:** Intentionally create a harmless missing semicolon or misspelled local variable, then have students use Android Studio's Build output file/line link. FIRST does not currently provide a good Android Studio-specific lesson on reading Java compiler diagnostics; the seeded-error procedure is locally devised. Do not use a hardware-name mismatch for the compiler exercise because that compiles and fails only at runtime.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [Reading and Writing to Hardware](https://gm0.org/en/latest/docs/software/getting-started/common-hardware-components.html), sections **Creating and Instantiating Hardware Objects** and **DC Motor**. It places the Java variable, `hardwareMap` name, direction, mode, and motor command in one short trace students can annotate. Caveat: community examples contain generic names and some advanced mode advice; retain the pinned SDK 12.0 API constraints and the team's tested configuration.

### Gamepad input, drivetrain output, and Git basics

**Official support**

- [Running Your OpMode with a Gamepad Connected](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#running-your-opmode-with-a-gamepad-connected) covers gamepad assignment, the -1/+1 Y-axis range, why Y is negated, motor output, and telemetry.
- SDK [`RobotTeleopTank_Iterative`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/RobotTeleopTank_Iterative.java) is the exact two-stick/two-motor tank-drive sample. [`BasicOmniOpMode_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/BasicOmniOpMode_Linear.java) is the official alternative for a four-motor mecanum drivetrain.
- Pinned [`Gamepad`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/Gamepad.html) and [`DcMotor`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/DcMotor.html) Javadocs let students trace field to method.
- GitHub's official [About Git: Basic Git commands](https://docs.github.com/en/get-started/using-git/about-git#basic-git-commands) defines status, staging, commits, pull, and push. [Hello World: Make and commit changes](https://docs.github.com/en/get-started/start-your-journey/hello-world#step-3-make-and-commit-changes) explains commits as saved changes with messages.

**BIOBUZZ recommendation:** Teach `git status`, Android Studio/GitHub Desktop diff, then one commit only after the raised-wheel test passes. The raised-wheel test and exact first-commit ritual are team safety/workflow decisions.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [Gamepad Usage](https://gm0.org/en/latest/docs/software/tutorials/gamepad.html), sections **Gamepad Layout** and **Button Aliases**. The diagrams help pairs map a physical control to the `gamepad1` field they are tracing and avoid Xbox/PS4 naming confusion. Caveat: this page is community-maintained and does not replace the pinned `Gamepad` Javadoc; verify the team's exact legal controller and use the official tutorial above for joystick range and Y-axis inversion.

### Decisions and driver controls

**Official support**

- Oracle's [Control Flow Statements: The If-Then Statement](https://dev.java/learn/language-basics/controlling-flow/#if-then) and [The If-Then-Else Statement](https://dev.java/learn/language-basics/controlling-flow/#if-then-else) are the authoritative Java language lessons.
- [Controlling a Servo: Modifying Your OpMode](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/controlling_a_servo/Controlling-a-Servo-%28Android-Studio%29.html#modifying-your-op-mode-to-control-a-servo) gives a complete gamepad-button `if`/`else if` chain, `Servo.setPosition(0..1)`, and servo telemetry.
- SDK [`RobotTeleopTank_Iterative`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/RobotTeleopTank_Iterative.java) demonstrates button conditionals, motor/servo actions, constants, and `Range.clip`. Use the pinned [`Servo`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/Servo.html) API for `setPosition` and direction behavior.

**BIOBUZZ recommendation:** Choose slow mode if no safe servo fixture exists; otherwise use two conservative measured servo positions. The two-case test written before deployment is a local test discipline.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [Gamepad Usage](https://gm0.org/en/latest/docs/software/tutorials/gamepad.html), section **Boolean Inputs** through **Toggles**. It contrasts a held-button action with a one-action-per-press edge, which makes the condition/action distinction observable and prevents an accidental many-updates-per-press servo control. Caveat: edge detection is more complexity than this meeting requires; begin with the simple held-button `if`/`else`, and prefer the SDK 12.0 `Gamepad` edge methods when an edge is actually needed.

### Methods and named actions

**Official support**

- Oracle's [Defining Methods: Defining a Method](https://dev.java/learn/classes-objects/defining-methods/#intro) identifies return type, name, parameter list, and body; [Naming a Method](https://dev.java/learn/classes-objects/defining-methods/#naming) gives verb/camel-case conventions.
- SDK [`RobotAutoDriveByEncoder_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/RobotAutoDriveByEncoder_Linear.java) provides a readable call site and parameterized `encoderDrive(speed, leftInches, rightInches, timeoutS)` definition. For subsystem separation, [`ConceptExternalHardwareClass`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/externalhardware/ConceptExternalHardwareClass.java) and its required [`RobotHardware`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/externalhardware/RobotHardware.java) are official but more advanced.
- GitHub's [Getting changes: Pulling changes](https://docs.github.com/en/get-started/using-git/getting-changes-from-a-remote-repository#pulling-changes-from-a-remote-repository) explains that pull combines fetch and merge; [About Git](https://docs.github.com/en/get-started/using-git/about-git) explains history and commits.

**BIOBUZZ recommendation:** Extract only a small `drive(left, right)` helper inside the current OpMode; do not introduce a hardware abstraction class unless duplication already justifies it. Pull with a clean/committed working tree before editing and inspect the repository's commit history in GitHub or the IDE.

**Supplemental resource (non-authoritative)**

- Alan G. Smith, [*Learn Java for FTC*](https://github.com/alan412/LearnJavaForFTC/blob/master/LearnJavaForFTC.pdf), chapter 5 sections **5.2 Class Methods** and **5.2.2 Parameters**. The FTC-context examples give students a second explanation of a method definition, return type, parameters, and call site before they extract `drive(left, right)`. Caveat: this is an independently authored book, not FIRST documentation; its repository reports sample testing with SDK 11.2, so use it for Java concepts and compare any FTC code with the pinned SDK 12.0 sources.

### Mechanism APIs and physical safety limits

**Official support**

- [Controlling a Servo](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/controlling_a_servo/Controlling-a-Servo-%28Android-Studio%29.html), sections **What is a Servo Motor?** and **Modifying Your OpMode**, documents target positions from 0 to 1, gamepad decisions, and telemetry.
- SDK [`RobotTeleopTank_Iterative`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/RobotTeleopTank_Iterative.java) provides named constants, mutually exclusive arm commands, a zero-power `else`, paired servo motion, and `Range.clip`.
- [Troubleshooting Common Issues: invalid number](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/troubleshooting_common_issues/troubleshooting-common-issues.html#user-code-threw-an-uncaught-exception-number-xxx-is-invalid) documents legal motor and servo ranges and `Range.clip`.

**BIOBUZZ recommendation:** Builders establish safe mechanism limits empirically at low power before programmers encode constants and an interlock. FIRST documents API ranges; it cannot supply safe physical limits for the team's mechanism.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [Servo Usage Tips](https://gm0.org/en/latest/docs/power-and-electronics/servo-guide/usage-tips.html), especially the bullets on backdriving, travel range, connector orientation, and lateral-load support. These turn abstract software limits into concrete failure modes for the builders/programmers safety discussion. Caveat: select the Control Hub configuration type and pulse range specified by the exact installed servo manufacturer; the page's full-range advice is not universal permission to command the full mechanical travel.

### Debugging with evidence

**Official support**

- [Troubleshooting Common Control System Issues](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/troubleshooting_common_issues/troubleshooting-common-issues.html) has exact sections for **User Code Threw an Uncaught Exception: null**, **number XXX is invalid**, **Unable to Find a Hardware Device**, **Neglecting to Insert waitForStart()**, gamepad faults, and uninterruptible threads. The exception sections show how a stack trace identifies `Class.java:XX`.
- [Using Log Files: The FIRST Tech Challenge Log Files](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/using_log_files/using-log-files.html#the-first-tech-challenge-log-files) gives RC/DS log paths; [Viewing the Robot Controller Log File](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/using_log_files/using-log-files.html#viewing-the-first-tech-challenge-robot-controller-log-file) shows **View logs**; [Using Android Studio to View Log Messages](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/using_log_files/using-log-files.html#using-android-studio-to-view-log-messages) covers Logcat and filters; [Example OpMode](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/using_log_files/using-log-files.html#example-opmode) uses `RobotLog.d`.
- Pinned [`Telemetry`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/org/firstinspires/ftc/robotcore/external/Telemetry.html) is the method-level reference for instrumenting values.

**BIOBUZZ recommendation:** Use the syllabus fault-log columns (symptom, hypothesis, evidence, cause, fix) and seed one fault at a time. Build errors belong to the IDE/compiler; hardware-name, bounds, and null errors belong to Driver Station/RC logs; reversed direction may be code, wiring, or mechanical setup. The layer-classification checklist is local synthesis.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [Common Issues](https://gm0.org/en/latest/docs/software/getting-started/common-issues.html), sections **Exceptions**, **How the SDK handles exceptions**, and **Stuck in start, loop, stop...**. Its intentionally broken/fixed pairs are useful for asking students to predict the evidence before running a seeded fault. Caveat: some snippets are deliberately wrong and several source links target extracted/older SDK code; use them only as fault specimens and verify conclusions against the official SDK 12.0 sources above.

### TeleOp integration and recovery points

**Official support**

- SDK [`RobotTeleopTank_Iterative`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/RobotTeleopTank_Iterative.java) is an integration reference for drive, arm, claw, clipping, and telemetry; adapt concepts rather than assuming its hardware names or geometry.
- GitHub's [About Git](https://docs.github.com/en/get-started/using-git/about-git) states that earlier versions can be recovered and history answers what/who/when/why. GitHub's [Viewing releases and tags](https://docs.github.com/en/repositories/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags) explains where tags are viewed.
- FIRST's fork/clone guide, [A Short Digression on Tags](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html#a-short-digression-on-tags), defines a tag as a named pointer that does not move.

**BIOBUZZ recommendation:** Require three identical checklist runs, separate defects from requests, and create an annotated team tag such as `teleop-baseline-m8` only after passing. FIRST explains tags but does not prescribe this tag or threshold.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [Using Telemetry](https://gm0.org/en/latest/docs/software/tutorials/using-telemetry.html), sections **Building Telemetry** and **Updating Telemetry**. Use its keyed-caption behavior and 250 ms default refresh explanation to choose a small, readable set of baseline health values for repeatability runs instead of flooding the Driver Station. Caveat: telemetry should not be treated as a complete event log; method behavior and transmission settings come from the pinned SDK 12.0 `Telemetry` Javadoc.

### Guarded Autonomous sequencing

**Official support**

- [Creating and Running an OpMode: Examining the Structure](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#examining-the-structure-of-your-opmode) explains changing `@TeleOp` to `@Autonomous`.
- SDK [`RobotAutoDriveByTime_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/RobotAutoDriveByTime_Linear.java) is the exact low-complexity timed sequence. Each leg sets outputs, resets `ElapsedTime`, loops while both active and under a duration, reports telemetry, and explicitly stops motors.
- [`LinearOpMode`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/eventloop/opmode/LinearOpMode.html) and [`ElapsedTime`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/util/ElapsedTime.html) are the API references.

**BIOBUZZ recommendation:** Start with one low-speed mobility/park action and measured duration. Action cards, repeated physical measurement, and named wrappers around the sample pattern are local pedagogy.

**Supplemental resource (non-authoritative)**

- REV Robotics, [ElapsedTime - Blocks](https://docs.revrobotics.com/duo-control/hello-robot-blocks/part-3/elapsed-time.md), sections **ElapsedTime Setup**, **ElapsedTime Logic**, and **ElapsedTime - Multiple Movements**. Its visual sequence can help students narrate reset, run-until-time, stop, and next-action before mapping those ideas to the official Java sample. Caveat: this is vendor-authored but written for Blocks and an evergreen REV curriculum; do not copy syntax into Java or let it override the SDK 12.0 `ElapsedTime` API and stop-request guards.

### Encoders and measured motion

**Official support**

- [Encoders (Rotation Counters)](https://ftc-docs.firstinspires.org/en/latest/control_hard_compon/rc_components/encoders/encoders.html) explains ticks, rotational displacement, incremental versus absolute encoders, and manufacturer-specific ticks per rotation.
- [Motor Modes and Encoders: Using Encoders](https://ftc-docs.firstinspires.org/en/latest/tech_tips/tech-tips/tech-tip-motor-modes/tech-tip-motor-modes.html#using-encoders) and [Motor Modes](https://ftc-docs.firstinspires.org/en/latest/tech_tips/tech-tips/tech-tip-motor-modes/tech-tip-motor-modes.html#motor-modes) explain the four `DcMotor.RunMode` values, correct motor configuration, signed direction outside `RUN_TO_POSITION`, and unsigned power/velocity in `RUN_TO_POSITION`.
- SDK [`RobotAutoDriveByEncoder_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/RobotAutoDriveByEncoder_Linear.java) contains `COUNTS_PER_INCH`, reset/read telemetry, target calculation, `RUN_TO_POSITION`, `isBusy`, a timeout, stop-request handling, and explicit motor stop. The source comments identify all three stopping conditions.

**BIOBUZZ recommendation:** Measure actual ticks per traveled distance on the competition robot rather than accepting the sample's TETRIX constants. Preserve the timeout and `opModeIsActive()` guard. The empirical conversion worksheet and time-versus-encoder comparison are local activities.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [Encoders](https://gm0.org/en/latest/docs/software/tutorials/encoders.html), sections **What Are Encoders?**, **Terminology**, **Reading Encoders**, and **Tracking Wheels and Spools**. It connects ticks, counts per revolution, circumference, units, and a Java telemetry probe directly to the meeting's measurement worksheet. Caveat: confirm counts per revolution and actual gear ratio from the exact installed motor/encoder product page, then measure the assembled robot; relative encoders lose position across power cycles and do not reset automatically at each OpMode.

### Composing measured Autonomous actions

**Official support**

- SDK [`RobotAutoDriveByEncoder_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/RobotAutoDriveByEncoder_Linear.java) demonstrates a high-level sequence composed from repeated parameterized `encoderDrive` calls and telemetry at target/current position.
- SDK [`RobotAutoDriveByGyro_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/RobotAutoDriveByGyro_Linear.java) is an official advanced reference for `driveStraight`, `turnToHeading`, `holdHeading`, correction, timeout/stop checks, and composition. It requires encoders and an IMU; do not add it merely to satisfy the lesson.
- Oracle's [Defining Methods](https://dev.java/learn/classes-objects/defining-methods/) supports readable action methods and parameters.

**BIOBUZZ recommendation:** Run from a marked starting fixture, log outcome and error, change one constant at a time, and preserve the Meeting 9 routine under a clearly named fallback OpMode/tag. The three-in-five initial threshold is the syllabus's local reliability target, not a FIRST standard.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [Encoders](https://gm0.org/en/latest/docs/software/tutorials/encoders.html), section **Running Motors With Encoders**. Use its target-before-mode ordering and target/current telemetry as a code-reading check before composing repeated actions. Caveat: its single-motor arm example is not a drivetrain recipe; Game Manual 0 elsewhere cautions against independent `RUN_TO_POSITION` control for coupled multi-motor mechanisms, so keep the official sample's timeout/stop conditions and test the team's drivetrain behavior empirically.

### Nonblocking state and interruptibility

**Official support**

- [Troubleshooting Common Issues: Uninterruptible Threads](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/troubleshooting_common_issues/troubleshooting-common-issues.html#uninterruptible-threads) shows why `while (true)` can ignore Stop and recommends an interruptible condition such as `opModeIsActive()` (or yielding with sleep).
- SDK [`BasicOpMode_Iterative`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/BasicOpMode_Iterative.java) is the simplest official continuously returning `loop()` structure.
- SDK [`ConceptGamepadEdgeDetection`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/ConceptGamepadEdgeDetection.java) documents rising/falling edges and uses `leftBumperWasPressed()`/`Released()` and trigger equivalents. The pinned [`Gamepad`](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/Gamepad.html) API lists the available edge methods.
- Oracle's [Control Flow: While](https://dev.java/learn/language-basics/controlling-flow/#do-while) describes condition-controlled loops.

**Gap and recommendation:** No current official FTC SDK sample was found that teaches a general mechanism finite-state machine or timer-driven nonblocking sequence. `ConceptGamepadEdgeDetection` itself sleeps for two seconds to make telemetry observable, so it is evidence for edge APIs, **not** a nonblocking timing model. Model a small `enum`/state plus `ElapsedTime` transition in the continuously returning main loop as a BIOBUZZ-created pattern, or limit this meeting to an edge-triggered toggle. Keep `opModeIsActive()`/Stop checks in every long-running loop.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [Finite State Machines](https://gm0.org/en/latest/docs/software/concepts/finite-state-machines.html), sections **What is a Finite State Machine?**, **Naive Implementation**, and **Useful Implementation**. Its state diagram and timer-driven TeleOp mechanism show why returning to the drive loop is different from sleeping through an action. Caveat: this is an advanced community example with placeholder mechanism constants and some API details that must be checked against SDK 12.0; draw and implement a much smaller BIOBUZZ state machine rather than copying the full lift example.

### Optional sensors and collaboration

**Official support**

- [Using Sensors: Color-Distance Sensor](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/using_sensors/Using-Sensors-%28Android-Studio%29.html#color-distance-sensor) displays raw distance through telemetry and documents `NaN`/saturation; [Touch Sensor](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/using_sensors/Using-Sensors-%28Android-Studio%29.html#touch-sensor) shows input configuration and an `if`/`else` decision.
- Choose the exact official sample matching installed hardware: [`SensorTouch`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/SensorTouch.java), [`SensorREV2mDistance`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/SensorREV2mDistance.java), [`SensorColor`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/SensorColor.java), or [`RobotAutoDriveToLine_Linear`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples/RobotAutoDriveToLine_Linear.java). Sensor samples intentionally read/display values; the line sample adds a bounded decision.
- GitHub's [Hello World: Create a branch](https://docs.github.com/en/get-started/start-your-journey/hello-world#step-2-create-a-branch), [Open a pull request](https://docs.github.com/en/get-started/start-your-journey/hello-world#step-4-open-a-pull-request), and [Reviewing proposed changes](https://docs.github.com/en/pull-requests/collaborating-with-pull-requests/reviewing-changes-in-pull-requests/reviewing-proposed-changes-in-a-pull-request) cover branches, diffs, comments, approval, and requested changes.

**BIOBUZZ recommendation:** First graph/display raw readings and choose a threshold from team measurements; only then add a bounded behavior. Use one short branch/PR if students are ready, otherwise sequential commits plus review. The test checklist and readiness gate are local controls.

**Supplemental resource (non-authoritative)**

- REV Robotics, [Programming Touch Sensors](https://docs.revrobotics.com/duo-control/hello-robot-blocks/part-1/programming-touch-sensors.md), sections **Touch Sensor Basics**, **Adding Telemetry**, and **Touch Sensor as a Limit Switch**. If the installed device is a REV Touch Sensor, the page gives pairs a compact read-display-decide progression before they implement the same progression in Java. Caveat: use this only for that exact installed sensor and wiring/configuration; the curriculum is Blocks-based and evergreen, so Java syntax and behavior must come from the matching SDK 12.0 sample/Javadoc. Choose the REV color-sensor guide or another manufacturer's current documentation instead when that is the actual device.

### Reliability and failure recovery

**Official support**

- [Robot Control System Troubleshooting Guide](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/index.html) links the official common-issues, event wireless, and log-file procedures. [Troubleshooting Common Issues](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/troubleshooting_common_issues/troubleshooting-common-issues.html) should be the team's first technical index.
- [Using Log Files](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/using_log_files/using-log-files.html) provides timestamps, RC/DS paths, View Logs, full-file retrieval, ADB, Logcat, and `RobotLog` sections.
- [Preparing for Competition: Robot and Driver Station Self-Inspect](https://ftc-docs.firstinspires.org/en/latest/tech_tips/tech-tips/tech-tip-competition-prep/tech-tip-competition-prep.html#robot-and-driver-station-self-inspect) points to Driver Station **Self-Inspect**. Use the current [2027 Inspection Checklist](https://ftc-resources.firstinspires.org/ftc/archive/2027/event/inspection-check), not the stale 2026 link shown in that Tech Tip.
- [Team Resources](https://ftc-resources.firstinspires.org/ftc/team) is FIRST's live index for inspection and troubleshooting resources.

**BIOBUZZ recommendation:** Convert only failures actually rehearsed into a one-page symptom/evidence/action guide. Safely inject held-button startup, wrong config name, gamepad reassignment, low battery warning, or stalled mechanism only when doing so cannot damage hardware. The risk ranking and exact fault-injection list are local engineering practices.

**Supplemental resources (non-authoritative)**

- REV Robotics, [General Troubleshooting](https://docs.revrobotics.com/duo-control/troubleshooting-the-control-system/troubleshooting-the-control-system.md), section **General Best Practices** and its linked LED/component-specific guides. It adds vendor-specific battery, update, issue-isolation, ESD, USB, and Hub checks to the team's evidence/action guide. Caveat: apply only the branch matching the installed REV Control/Driver Hub setup, and defer to current FIRST event wireless and inspection rules.
- REV Robotics, [Accessing Log Files](https://docs.revrobotics.com/duo-control/managing-the-control-system/downloading-log-file.md), sections **Log Viewer - REV Hardware Client** and **Downloading Log Files**, especially **File Search** and **Robot Controller Console**. It provides a concrete evidence-preservation procedure when the Driver Station message is insufficient. Caveat: menus and REV Hardware Client screens can change with OS/app versions; rehearse the procedure on the team's current devices before relying on it at an event.

### Match simulation and code freeze

**Official support**

- [Preparing for Competition: Automatic Auto to Driver Control Program Switching](https://ftc-docs.firstinspires.org/en/latest/tech_tips/tech-tips/tech-tip-competition-prep/tech-tip-competition-prep.html#automatic-auto-to-driver-control-program-switching) documents Driver Station auto-loading of TeleOp after autonomous and links the built-in Practice Timer.
- Use [Team Resources](https://ftc-resources.firstinspires.org/ftc/team) for current season inspection links and [Self-Inspect](https://ftc-docs.firstinspires.org/en/latest/hardware_and_software_configuration/self_inspect/new-self-inspect.html) before simulations.
- GitHub's [Viewing releases and tags](https://docs.github.com/en/repositories/releasing-projects-on-github/viewing-your-repositorys-releases-and-tags) and FIRST's [Tags explanation](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html#a-short-digression-on-tags) support labeling the immutable event commit.

**BIOBUZZ recommendation:** Run full autonomous-to-TeleOp timing with event roles, forbid coaching during a run, triage afterward, and create an annotated `event-YYYY-MM-DD` tag plus a release/backup only after the freeze criteria pass. "Three simulations" and the must-fix-only freeze rule are syllabus decisions, not FIRST requirements.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [Driver Station Guide](https://gm0.org/en/latest/docs/power-and-electronics/driver-station-guide.html), sections **REV Driver Hub** and **Controllers**. Use its power, Wi-Fi, USB, battery, cable, and driver-familiarity risks as prompts when designing pre-simulation checks and assigning Driver Station responsibility. Caveat: the page contains explicitly old season references, including an archived 2021-2022 controller list and a 2023-2024 phone statement; it is not a legality source. Use the current Competition Manual for allowed devices and event procedure.

### Student ownership and event readiness

**Official support**

- GitHub's [Cloning a repository](https://docs.github.com/en/repositories/creating-and-managing-repositories/cloning-a-repository#cloning-a-repository) gives the restore-to-a-new-laptop procedure. FIRST's [Fork and Clone: Getting Started](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html#getting-started-quick-start-guide) gives the FTC-specific fork/clone path.
- [Building and Installing Your OpMode](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#building-and-installing-your-opmode) and [Running Your OpMode](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#running-your-opmode) are the deployment rehearsal script.
- [Preparing for Competition: Self-Inspect](https://ftc-docs.firstinspires.org/en/latest/tech_tips/tech-tips/tech-tip-competition-prep/tech-tip-competition-prep.html#robot-and-driver-station-self-inspect), [current Team Resources](https://ftc-resources.firstinspires.org/ftc/team), and [Troubleshooting Common Issues](https://ftc-docs.firstinspires.org/en/latest/control_system_troubleshooting/troubleshooting_common_issues/troubleshooting-common-issues.html) support inspection and recovery.
- [Protecting and Backing Up Your Robot Code](https://ftc-docs.firstinspires.org/en/latest/tech_tips/tech-tips/tech-tip-protecting-robot-code/tech-tip-protecting-robot-code.html) officially emphasizes a non-default Control Hub password and regular backups. Its OnBot Java backup details do not apply to Android Studio team code; the Git/GitHub repository is the relevant backup here.

**BIOBUZZ recommendation:** Rehearse from a clean clone checked out at the frozen event tag, then build/deploy and run a smoke test without mentor keyboard use. Give a mystery fault only from previously rehearsed categories. Student demonstrations, backup-role coverage, and `keep/change/learn next` are local assessment practices.

**Supplemental resource (non-authoritative)**

- Game Manual 0, [Collaboration and Efficiency](https://gm0.org/en/latest/docs/being-a-team/collaboration-and-efficiency.html), sections **General Collaboration**, **Software Collaboration**, and **Efficiency**. Its emphasis on shared documentation, version control, pair programming, delegation, and surfacing problems supports the final ownership/backup-role conversation. Caveat: these are broad community practices rather than a restore procedure or readiness standard; the clean-clone demonstration and official FIRST/GitHub instructions above remain the actual verification.

## How students should navigate official code and APIs

Use this repeatable path rather than web-searching random examples:

1. Start at the pinned [TeamCode readme](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/readme.md), especially **Naming of Samples**: `Basic` is structure, `Sensor` is minimal reading/display, `Robot` is a working simple-drive baseline, and `Concept` isolates one function.
2. Browse the pinned [`external/samples` directory](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples), open the class whose name matches the task, and read its header for required hardware/configuration before copying anything.
3. Copy a sample into `org.firstinspires.ftc.teamcode`, rename the class and OpMode, adapt hardware names/constants, and remove/comment `@Disabled`; never edit the sample in `FtcRobotController`. These steps are official in [Sample OpModes](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#sample-opmodes) and the TeamCode readme.
4. Put the cursor on an SDK type/method in Android Studio and use declaration/quick documentation, or open the pinned 12.0.0 Javadoc. Read the class summary first, then field/method signatures and parameter constraints. The FTC tutorial explicitly links [Javadoc Reference Information](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/creating_op_modes/Creating-and-Running-an-Op-Mode-%28Android-Studio%29.html#javadoc-reference-information).
5. Use Oracle's [Java Language Basics](https://dev.java/learn/language-basics/) only for the language construct needed now, and its [Defining Methods](https://dev.java/learn/classes-objects/defining-methods/) page when extracting actions. Do not assume the installed FTC source/target level supports every feature shown in the newest Java tutorials; follow the SDK project's Gradle configuration and existing source style.

## Known gaps, conflicts, and version-sensitive material

- **No official general state-machine lesson found.** Official sources support edge detection, iterative loops, timers, and interruptibility. This material is retained only as an optional topic reference; it is not the redesigned Meeting 12.
- **Compiler diagnostics coverage is weak.** The FTC Android Studio tutorial says to build and verify success but does not teach compiler-message anatomy. Use Android Studio Build output for the exercise; Java compiler line/file interpretation is generic tool behavior, not an FTC-specific official lesson.
- **A stale troubleshooting statement exists.** The current common-issues page says a missing OpMode may need registration in `FtcOpModeRegister`; current sample and TeamCode guidance uses `@TeleOp`/`@Autonomous` and `@Disabled`. For SDK 12.0 team OpModes, follow the current annotated samples and TeamCode readme, not that registration sentence.
- **Android Studio setup text can lag the SDK.** FTC Docs currently retains Ladybug/JDK 17 cautions, while SDK 12.0 explicitly requires Narwhal 3 Feature Drop or later. The current season SDK release notes/README control.
- **FTC Docs and Team Resources are evergreen.** Recheck all `en/latest` and `/ftc/team` content before delivery. URLs pinned to SDK `v12.0` and Javadoc `12.0.0` are stable but should be replaced when the team intentionally upgrades.
- **Samples are examples, not drop-in competition code.** Hardware names, motor directions, encoder constants, geometry, safe powers, servo limits, and stopping behavior must be validated on BIOBUZZ hardware. This is repeatedly stated in sample headers and configuration guidance.
- **Game/inspection material changes by season.** Use the live [Team Resources](https://ftc-resources.firstinspires.org/ftc/team), current [Competition Manual index](https://ftc-docs.firstinspires.org/en/latest/manuals/game_manuals/game_manuals.html), and current inspection checklist at the event; do not freeze game rules into this teaching map.

## Primary-source index

- [FIRST Team Resources](https://ftc-resources.firstinspires.org/ftc/team)
- [FTC Docs](https://ftc-docs.firstinspires.org/en/latest/)
- [FTC Android Studio Programming Tutorial](https://ftc-docs.firstinspires.org/en/latest/programming_resources/android_studio_java/Android-Studio-Tutorial.html)
- [FTC SDK overview](https://ftc-docs.firstinspires.org/en/latest/ftc_sdk/overview/index.html)
- [Official FTC SDK repository](https://github.com/FIRST-Tech-Challenge/FtcRobotController)
- [FTC SDK v12.0 release](https://github.com/FIRST-Tech-Challenge/FtcRobotController/releases/tag/v12.0)
- [FTC SDK v12.0 samples](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples)
- [FTC SDK Javadoc artifacts](https://javadoc.io/doc/org.firstinspires.ftc)
- [GitHub Docs: About Git](https://docs.github.com/en/get-started/using-git/about-git)
- [GitHub Docs: Hello World / pull-request workflow](https://docs.github.com/en/get-started/start-your-journey/hello-world)
- [Oracle Java Language Basics](https://dev.java/learn/language-basics/)
- [Oracle Java API documentation](https://docs.oracle.com/en/java/javase/17/docs/api/)
