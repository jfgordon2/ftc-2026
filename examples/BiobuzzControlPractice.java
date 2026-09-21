package org.firstinspires.ftc.teamcode;

import com.qualcomm.robotcore.eventloop.opmode.LinearOpMode;
import com.qualcomm.robotcore.eventloop.opmode.TeleOp;

/** Decision practice only: no hardware lookup or actuator commands. */
@TeleOp(name = "BIOBUZZ Control Practice", group = "Training")
public class BiobuzzControlPractice extends LinearOpMode {
    @Override
    public void runOpMode() {
        telemetry.addData("Status", "Telemetry only - no motor commands");
        telemetry.update();
        waitForStart();
        while (opModeIsActive()) {
            double forward = -gamepad1.left_stick_y;
            double turn = gamepad1.right_stick_x;
            double left = forward + turn;
            double right = forward - turn;
            double scale = Math.max(1.0, Math.max(Math.abs(left), Math.abs(right)));
            left = left / scale;
            right = right / scale;

            boolean collect = gamepad1.right_bumper;
            boolean reverse = gamepad1.left_bumper;
            String intakeRequest = "STOP";
            if (collect && !reverse) {
                intakeRequest = "COLLECT";
            } else if (reverse && !collect) {
                intakeRequest = "REVERSE";
            }

            telemetry.addData("Drive requests", "left %.2f, right %.2f", left, right);
            telemetry.addData("Intake request", intakeRequest);
            telemetry.addData("Output", "No hardware commands");
            telemetry.update();
            idle();
        }
    }
}
