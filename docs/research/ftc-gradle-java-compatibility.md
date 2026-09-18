---
title: FTC SDK v12.0 Gradle and Java Compatibility
description: First-party guidance and compatibility evidence for FTC Gradle sync.
permalink: /docs/research/ftc-gradle-java-compatibility.html
---

# FTC SDK v12.0 Gradle and Java Compatibility

Research date and source access date: 2026-09-18

This note answers only what the cited first-party sources establish. FTC Docs
is evergreen; SDK links are pinned to the immutable `v12.0` tag. Gradle is
cited only for Java/runtime and Wrapper behavior that FIRST does not own.

## Findings

| Question | Documented answer | Authority |
| --- | --- | --- |
| Required Android Studio for SDK v12.0 | **Android Studio Narwhal 3 Feature Drop or later.** The v12.0 README says exactly that. Its inherited v11.2 release note adds that earlier Android Studio versions fail to sync with AGP 8.13.2 and says, “Do not” accept an IDE prompt to downgrade AGP. | FTC SDK v12.0 [Requirements](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0#requirements) and [v11.2 breaking change retained in the v12.0 README](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0#version-112-20260707-102819) |
| First import/sync | FTC Docs says to open the extracted project directory, trust it if prompted, and allow several minutes for import. If prompted to update AGP, ignore the prompt because a newer AGP may not be compatible with the current FTC SDK. For v12.0 specifically, use Narwhal 3 Feature Drop or later and do not downgrade its AGP. FTC does **not** prescribe a special first-sync command, manual Wrapper edit, or exact success message in these sources. | FTC Docs [Importing the Project into Android Studio](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/downloading_as_project_folder/Downloading-the-Android-Studio-Project-Folder.html#importing-the-project-into-android-studio) plus the pinned v12.0 release note above |
| Java/JDK selection | No source reviewed gives a v12.0-specific instruction to select one exact Gradle JDK. The evergreen install page still gives **Ladybug-specific** advice to install JDK 17 and not upgrade Gradle after its initial sync error; that is not v12.0/Narwhal guidance and should not be presented as such. The pinned v12 project compiles team Java with `sourceCompatibility` and `targetCompatibility` set to Java 8; those language targets are distinct from the JVM that runs Gradle. | FTC Docs [System Requirements caution](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/installing_android_studio/Installing-Android-Studio.html#system-requirements); SDK v12.0 [`build.common.gradle` lines 102-105](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/build.common.gradle#L102-L105) |
| Java compatibility of the v12 Wrapper | Gradle 9.1.0 requires a JVM from 17 through 25 to run. Its matrix says Java 25 support for running Gradle begins at 9.1.0. Therefore Java 25 is compatible with the **v12.0 Wrapper**, while a project reporting Gradle 6.6.1 is not running the v12 Wrapper and cannot run on Java 25. This is Gradle compatibility evidence, not an FTC instruction to select Java 25. | Gradle 9.1.0 [Java Runtime compatibility](https://docs.gradle.org/9.1.0/userguide/compatibility.html#java_runtime) |
| How to identify the v12 Wrapper | Read `gradle/wrapper/gradle-wrapper.properties`; the `distributionUrl` names the requested distribution. In tag v12.0 it is `gradle-9.1.0-bin.zip`, so the Wrapper version is **9.1.0**. Gradle also documents `./gradlew --version` as a verification command. | SDK v12.0 [`gradle-wrapper.properties` line 3](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/gradle/wrapper/gradle-wrapper.properties#L3); Gradle [Wrapper properties](https://docs.gradle.org/9.1.0/userguide/gradle_wrapper.html#sec:adding_wrapper) and [upgrade verification](https://docs.gradle.org/9.1.0/userguide/gradle_wrapper.html#sec:upgrading_wrapper) |
| What happens on first Wrapper use | If the declared Gradle distribution is not already in `GRADLE_USER_HOME`, the Wrapper downloads and caches it. Thus a first sync can require a network download, but this is generic Gradle behavior, not an additional FTC v12 setup rule. | Gradle [Using the Gradle Wrapper](https://docs.gradle.org/9.1.0/userguide/gradle_wrapper.html#sec:using_wrapper) |
| Official route for upgrading an existing FTC Git project | FTC Docs recommends a team fork and documents updating by adding the FIRST repository as `upstream`, fetching it, merging `upstream/master` into a clean local `master`, pushing that to the team fork, and then merging `master` into the competition/feature branch. It warns that the development-branch merge can produce conflicts. The guide is general and its examples use old SDK versions; it does not provide a v12-specific migration recipe. | FTC Docs [Forks vs. Clones](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html#forks-vs-clones), [Updating the SDK to the Latest Version](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html#updating-the-sdk-to-the-latest-version), and [Summary](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html#summary) |
| Boundaries intended to ease upgrades | FTC Docs says not to change software under `FtcRobotController`. The v12 build file says to avoid editing `build.common.gradle`; put needed build customizations in `TeamCode/build.gradle`. These are explicit maintenance boundaries, not a complete migration procedure. | FTC Docs [Best Practices](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html#best-practices); SDK v12.0 [`build.common.gradle` lines 1-16](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/build.common.gradle#L1-L16) |
| v12 source migration required by release notes | v12.0 explicitly identifies one source-breaking migration: legacy AprilTag OpModes that consume `AprilTagDetection` must distinguish cluster and singleton subclasses and cast accordingly. No general old-project or Wrapper migration procedure appears in the v12.0 release section. | SDK v12.0 [Breaking Changes](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0#breaking-changes) |

## Copy-TeamCode question

**No reviewed FTC v12.0 or FTC Docs source explicitly instructs teams upgrading
an old project to copy `TeamCode` into a freshly downloaded v12.0 project.** It
also does not instruct them to repair an old project by manually changing only
`gradle-wrapper.properties`.

Two official copy instructions can be confused with that claim, but neither is
an SDK-upgrade procedure:

- The v12 `TeamCode` readme says to copy an individual SDK **sample class** into
  the current `TeamCode` module when creating an OpMode ([Creating your own
  OpModes](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/readme.md#creating-your-own-opmodes)).
- Its instruction to copy the **whole `TeamCode` folder** is under “ADVANCED
  Multi-Team App management” and creates a sibling module for another team; it
  is not about moving code to a new SDK project ([Cloning the TeamCode
  Module](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/readme.md#advanced-multi-team-app-management--cloning-the-teamcode-module)).

The explicit FTC Git workflow is instead fetch-and-merge from upstream. The
explicit v12 project boundary is to leave SDK-owned files alone where possible
and keep team code/customization in `TeamCode`.

## Explicit guidance vs. inference

**Explicit FTC guidance**

- Install Android Studio Narwhal 3 Feature Drop or later for v12.0.
- Do not downgrade AGP when an older IDE offers to do so.
- On import, trust the project if prompted, allow time for import, and ignore a
  generic AGP-update prompt.
- For Git-managed projects, update from the FIRST upstream repository by
  fetch/merge, keeping `master` clean where practical.
- Do not edit `FtcRobotController`; avoid editing `build.common.gradle` and put
  necessary build customization in `TeamCode/build.gradle`.
- Update the v12-breaking legacy AprilTag code described in the release notes.

**Supported facts, but not FTC-prescribed choices**

- The v12 Wrapper is Gradle 9.1.0 and Gradle says it runs on JVM 17-25.
- `VERSION_1_8` in `build.common.gradle` is the Java source/bytecode target; it
  does not mean the Gradle daemon must run on JDK 8.
- A reported Gradle 6.6.1 identifies an older/different project Wrapper, not
  the wrapper shipped in v12.0.

**Inference or local migration policy**

- “Download a clean v12.0 project, verify that it syncs, then transfer only the
  team's source/resources and deliberately reapply `TeamCode` customizations”
  is a reasonable way to avoid carrying obsolete build infrastructure. It is
  **not an explicit FTC instruction** in the reviewed sources.
- “Fix an old project by changing only its Wrapper URL to 9.1.0” is likewise
  **not FTC guidance**. A Wrapper-only change can leave old AGP, settings, and
  other SDK build files incompatible; the v12 release ties Gradle 9.1 to AGP
  8.13.2 and directs users not to downgrade AGP.
- Selecting a particular JDK within the Gradle-supported 17-25 range is not a
  v12 FTC prescription. Gradle compatibility alone does not prove complete
  Android Studio/AGP/project compatibility.

## Sources

All accessed 2026-09-18.

1. FIRST Tech Challenge, [`FtcRobotController` v12.0 README/release information](https://github.com/FIRST-Tech-Challenge/FtcRobotController/tree/v12.0), tag commit [`e14c2ae`](https://github.com/FIRST-Tech-Challenge/FtcRobotController/commit/e14c2aeb33e84d4ea21697beeea9ac49557be870).
2. FIRST Tech Challenge, [v12.0 release page](https://github.com/FIRST-Tech-Challenge/FtcRobotController/releases/tag/v12.0).
3. FIRST Tech Challenge, [v12.0 Wrapper properties](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/gradle/wrapper/gradle-wrapper.properties#L1-L7).
4. FIRST Tech Challenge, [v12.0 common build configuration](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/build.common.gradle).
5. FIRST Tech Challenge, [v12.0 TeamCode readme](https://github.com/FIRST-Tech-Challenge/FtcRobotController/blob/v12.0/TeamCode/src/main/java/org/firstinspires/ftc/teamcode/readme.md).
6. FTC Docs, [Installing Android Studio](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/installing_android_studio/Installing-Android-Studio.html).
7. FTC Docs, [Downloading and importing the Android Studio project](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/downloading_as_project_folder/Downloading-the-Android-Studio-Project-Folder.html).
8. FTC Docs, [Fork and Clone from GitHub](https://ftc-docs.firstinspires.org/en/latest/programming_resources/tutorial_specific/android_studio/fork_and_clone_github_repository/Fork-and-Clone-From-GitHub.html).
9. Gradle 9.1.0, [Compatibility Matrix](https://docs.gradle.org/9.1.0/userguide/compatibility.html#java_runtime).
10. Gradle 9.1.0, [Gradle Wrapper](https://docs.gradle.org/9.1.0/userguide/gradle_wrapper.html).
