# BIOBUZZ Course Resources

Use the source that owns the domain: the current Competition Manual controls
game legality, rules, inspection, and event procedure; pinned FTC SDK source and
Javadocs control SDK behavior; and the exact manufacturer's documentation
controls product specifications, wiring, and assembly. Supplemental material
may explain but does not override an owning source. When domains overlap or two
owning sources genuinely conflict, record the conflict and resolve it through
the current FIRST or manufacturer channel before publishing the claim. The
detailed selection notes and meeting mappings are in
[Resource Map for the BIOBUZZ FTC Programming Syllabus](docs/research/ftc-programming-syllabus-resources.html).

## Knowledge

These sources contain information the team can inspect directly. Each entry
states what authority it has and what must be checked before use.

### FIRST Team Resources

- **Source:** [FIRST Team Resources](https://ftc-resources.firstinspires.org/ftc/team)
- **Authority:** FIRST's live season index for team, event, inspection, and
  competition resources.
- **Use and caveat:** Follow it for current-season materials. It changes by
  season, so recheck it before delivery and at the event rather than relying on
  an older downloaded checklist.

### FTC Docs

- **Source:** [FIRST Tech Challenge Documentation](https://ftc-docs.firstinspires.org/en/latest/)
- **Authority:** Official FTC control-system, programming, configuration, and
  troubleshooting guidance.
- **Use and caveat:** Follow current procedures, but treat `en/latest` pages as
  version-sensitive. Current game rules supersede technical documentation, and
  the pinned SDK README controls if setup guidance names an older tool version.

### FTC SDK v12.0

- **Source:** [Official FTC SDK v12.0 release](https://github.com/FIRST-Tech-Challenge/FtcRobotController/releases/tag/v12.0)
  and [pinned v12.0 samples](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0/FtcRobotController/src/main/java/org/firstinspires/ftc/robotcontroller/external/samples)
- **Authority:** Official source and sample code for the course's selected FTC
  SDK version.
- **Use and caveat:** Start from the closest pinned sample by copying it into
  `TeamCode`; never edit the original in `FtcRobotController`. Sample hardware
  names, geometry, directions, powers, and constants must be adapted and tested
  on the BIOBUZZ robot.

### Pinned FTC SDK Javadocs

- **Source:** [FTC SDK 12.0 RobotCore Javadocs](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/)
  and [FTC artifact index](https://javadoc.io/doc/org.firstinspires.ftc)
- **Authority:** Version-pinned API signatures, parameters, limits, and return
  values for SDK classes.
- **Use and caveat:** Use `12.0.0` links for fixed handouts and the artifact
  index for classes in other modules. Do not substitute a moving `latest` URL;
   Javadocs describe software constraints, not safe limits for the assembled
   mechanism.

### Launcher Velocity and PIDF Sources

- **Official coefficient access:** [FTC Docs: Changing PIDF
  Coefficients](https://ftc-docs.firstinspires.org/en/latest/programming_resources/shared/pidf_coefficients/pidf-coefficients.html)
  explains the FTC workflow for reading and changing coefficients. It is an
  evergreen page, so recheck it against the pinned SDK before Meeting 13.
- **Pinned API:** [RobotCore 12.0.0 `DcMotorEx`
  Javadocs](https://javadoc.io/doc/org.firstinspires.ftc/RobotCore/12.0.0/com/qualcomm/robotcore/hardware/DcMotorEx.html)
  own the available velocity and PIDF methods for this course's SDK version.
  They do not supply safe, stable, or effective coefficients for an assembled
  launcher.
- **Supplemental FTC explanations:** [Game Manual 0 Control
  Loops](https://gm0.org/en/latest/docs/software/concepts/control-loops.html)
  and [SDK Motors](https://gm0.org/en/latest/docs/software/adv-control-system/sdk-motors.html)
  explain feedback concepts and FTC controller-unit cautions. Game Manual 0 is
  community maintained and does not own SDK behavior or coefficient values.
- **Supplemental student explanation:** [Ctrl Alt FTC: The PID
  Controller](https://www.ctrlaltftc.com/the-pid-controller) explains P, I, D,
  error, overshoot, noise, and windup. It is not authority for FTC APIs,
  hardware limits, or a universal tuning procedure.
- **Boundary:** Community sources are supplemental explanations and must be
  reconciled with FTC Docs and the pinned `DcMotorEx` API. Never copy PIDF
  coefficients between launchers, vendor assemblies, motor/controller modes,
  or robots; begin only from the verified matching source or controller
  read-back and retain measured evidence.

### Oracle Java

- **Source:** [Oracle Java Language Basics](https://dev.java/learn/language-basics/)
- **Authority:** First-party Java language instruction.
- **Use and caveat:** Read only the construct needed for the current robot task.
  The newest tutorial may show language features unavailable under the FTC
  project's configured Java level, so follow the SDK Gradle configuration and
  existing project style.

### GitHub Docs

- **Source:** [GitHub Docs: About Git](https://docs.github.com/en/get-started/using-git/about-git)
  and [GitHub Hello World](https://docs.github.com/en/get-started/start-your-journey/hello-world)
- **Authority:** Official documentation for GitHub concepts and hosted
  collaboration workflows.
- **Use and caveat:** Follow it for commits, branches, pull requests, and review.
  BIOBUZZ's rule to commit only tested robot behavior and its tag names are team
  workflow decisions, not GitHub requirements.

### REV DUO Documentation

- **Source:** [REV DUO Control System documentation](https://docs.revrobotics.com/duo-control)
- **Authority:** Manufacturer documentation for REV control-system products and
  named REV hardware.
- **Use and caveat:** Follow only the instructions for the exact installed REV
  model and current software. The evergreen site and menus can change, Blocks
  examples are not Java syntax, and REV guidance does not replace FIRST game or
  inspection rules.

### REV Hello Robot: Blocks Welcome and OnBot Java Path

- **Source:** [Hello Robot Blocks welcome](https://docs.revrobotics.com/duo-control/hello-robot-blocks/welcome)
  and the parallel [Hello Robot OnBot Java path](https://docs.revrobotics.com/duo-control/hello-robot-java/part-1).
- **Language and environment:** Parallel Blocks and OnBot Java tutorials. Hello
  Robot is not an Android Studio tutorial, so its editor, build, deployment,
  source-layout, and Git workflow do not replace this course's Android Studio
  path.
- **Assumed robot or parts:** Part 1 uses a REV Control Hub, Driver Hub, Core Hex
  Motor, Smart Robot Servo, REV Touch Sensor, Color Sensor V3, and battery on a
  secured test bed. Parts 2-3 use the named REV Class Bot V2 drivetrain and
  listed REV devices, configuration names, and geometry.
- **Best teaching use:** Use bounded sections for configuration, one-component
  tests, gamepad input, telemetry, timers, sensors, and encoders. Blocks can make
  control flow visible; return to pinned SDK 12.0 Java for course code.
- **Currency and authority:** Evergreen REV product instruction that can change
  in place. Recheck it before delivery. Its names, ports, directions, encoder
  values, and constants apply only to the named hardware, and its game or legal
  statements never override current FIRST rules or pinned SDK behavior.

### REV 2026-2027 Starter Bot Programming Walkthrough

- **Source:** [Programming TeleOp and Autonomous](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto)
  and its [OnBot Java overview](https://docs.revrobotics.com/ftc-kickoff-concepts/home/programming-teleop-and-auto/programming-onbot-java-overview).
- **Language and environment:** Downloadable Blocks and OnBot Java TeleOp and
  autonomous examples. If adapting Java into Android Studio, begin in the
  course's pinned SDK project and independently verify APIs, imports, build, and
  deployment.
- **Assumed robot or parts:** The exact 2026-2027 REV Starter Bot: two
  UltraPlanetary/HD Hex drive motors, Core Hex intake, UltraPlanetary/HD Hex
  flywheel, one continuous-rotation Smart Robot Servo, one positional Smart
  Robot Servo, Control Hub, Driver Hub, and the walkthrough's names and ports.
- **Best teaching use:** Read a bounded arcade-drive, subsystem-method,
  flywheel-safety, telemetry, or timed-autonomous section. Use the whole program
  only as an exact-robot integration specimen after reviewing every assumption.
- **Currency and authority:** Season-scoped to 2026-2027 BIOBUZZ and hosted on
  moving vendor pages. Archive it as a season example afterward. Its game
  claims, names, directions, powers, servo positions, timings, and velocity
  constants are not universal authority; FIRST rules, pinned SDK sources, and
  measurements on the assembled robot control.

### goBILDA 2026-2027 StarterBot Resource Guide

- **Source:** [2026-2027 StarterBot Resource Guide](https://www.gobilda.com/ftc-starter-bot-resource-guide-2026-2027-season/).
- **Language and environment:** A mechanical build/resource page, not a
  programming tutorial. Its code link leads to the separate Java TeleOp archive
  below.
- **Assumed robot or parts:** The named 2026-2027 goBILDA FTC Starter Kit, or
  named upgrade pack, plus a REV Control Hub; the guide's drop-center 6WD,
  Gecko-wheel intake, storage/feeding system, launcher, and documented revision.
- **Best teaching use:** Identify exact mechanisms, components, assembly,
  wiring paths, service points, and maintenance or packing needs when the team
  actually has this StarterBot revision.
- **Currency and authority:** Season-scoped to 2026-2027 and mutable in place.
  The guide and CAD do not prove the team's assembled robot is safe, legal, or
  reliable. Vendor game statements and dimensions do not override current FIRST
  rules, inspection materials, or documentation for substituted parts.

### goBILDA StarterBot Example Code

- **Source:** [3200-2627-0003_example-code.zip](https://www.gobilda.com/content/downloads/3200-2627-0003_example-code.zip),
  containing one file, `BioBuzzStarterbotTeleop.java`, when inspected on
  2026-09-17.
- **Language and environment:** One Java iterative SDK `OpMode`; no Blocks,
  autonomous file, Gradle project, configuration file, or version manifest is
  included. Adapt it only inside the pinned Android Studio SDK project.
- **Assumed robot or parts:** The exact 2026-2027 goBILDA StarterBot skid-steer
  drive, intake motor, two corner-intake continuous-rotation servos, windmill
  continuous-rotation servo, encoder-equipped launcher, and the file's exact
  configuration names and directions.
- **Best teaching use:** Read bounded lifecycle, hardware-map, arcade-drive,
  subsystem-method, telemetry, encoder-velocity, and nonblocking velocity-gate
  sections. It is a TeleOp integration example, not an autonomous source.
- **Currency and authority:** Season-scoped and distributed at a mutable,
  unversioned URL. Record a local filename and checksum for fixed handouts. Its
  powers, PIDF values, velocity thresholds, directions, and game behavior are
  robot-specific, not universal authority. Current FIRST rules own legality,
  pinned SDK sources own API behavior, exact-part documentation owns product
  facts, and controlled tests own results on the assembled robot.

### Game Manual 0

- **Source:** [Game Manual 0](https://gm0.org/en/latest/)
- **Authority:** Community-maintained explanatory material, not an authority for
  SDK behavior, legal hardware, inspection, or game rules.
- **Use and caveat:** Use as an optional explanation when its diagrams or
  examples clarify a lesson. Verify code against SDK v12.0 and all legality
  claims against the current Competition Manual; evergreen pages may change.

### Learn Java for FTC

- **Source:** [Learn Java for FTC](https://github.com/alan412/LearnJavaForFTC)
- **Authority:** Independently authored FTC-context Java teaching material.
- **Use and caveat:** Use as an optional explanation of Java concepts. Its code
  was reported tested with SDK 11.2 on the research date, so compare any FTC
  code with pinned SDK v12.0 sources before use.

## Wisdom

Use people and discussion channels to validate hard, team-specific questions,
not as substitutes for primary documentation. Record the question, exact robot
configuration, evidence, answer, and primary source that confirms the answer.

### Official FTC Community Forums

- **Source:** [FTC Community](https://ftc-community.firstinspires.org/)
- **Authority:** Officially hosted community discussion with practical input
  from FTC participants and subject-matter experts; individual posts are not
  rules or versioned API documentation.
- **Use and caveat:** Ask when official documents do not resolve a specific
  configuration or behavior. Include SDK version and hardware model, then
  validate advice against current FIRST, SDK, and manufacturer sources.

### Local Event and Mentor Network

- **Source:** Local FTC event staff, experienced teams, technical mentors, and
  inspectors available to BIOBUZZ.
- **Authority:** Contextual experience with local events and real robot systems;
  advice has no authority over the Competition Manual or official rulings.
- **Use and caveat:** Use for hard team-specific questions, especially physical
  integration and event practice. Ask for the source and season behind an
  answer, test technical advice safely, and confirm rule questions through
  current official channels.
