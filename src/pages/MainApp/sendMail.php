<?php
// Allow requests from your frontend domain
header("Access-Control-Allow-Origin: https://www.tanzcoffee.co.tz");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Your existing code continues here...
header("Content-Type: application/json");

// Include PHPMailer
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require __DIR__ . "/../phpmailer/Exception.php";
require __DIR__ . "/../phpmailer/PHPMailer.php";
require __DIR__ . "/../phpmailer/SMTP.php";

// Validate required fields
if (!isset($_POST['name'], $_POST['email'], $_POST['subject'], $_POST['message'])) {
    echo json_encode([
        "status" => "error",
        "message" => "Missing required fields"
    ]);
    exit;
}

$name    = htmlspecialchars($_POST['name']);
$email   = htmlspecialchars($_POST['email']);
$subject = htmlspecialchars($_POST['subject']);
$message = nl2br(htmlspecialchars($_POST['message']));

$mail = new PHPMailer(true);

try {
    // SMTP setup
    $mail->isSMTP();
    $mail->Host       = "mail.tanzcoffee.co.tz";
    $mail->SMTPAuth   = true;
    $mail->Username   = "info@tanzcoffee.co.tz";
    $mail->Password   = "Tanzcoffee2024"; // REAL password from your client
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SSL
    $mail->Port       = 465;

    // Sender & Receiver
    $mail->setFrom("info@tanzcoffee.co.tz", "TanzCoffee Website");
    $mail->addAddress("info@tanzcoffee.co.tz"); // Receives message

    // Client email for reply
    $mail->addReplyTo($email, $name);

    // Email content
    $mail->isHTML(true);
    $mail->Subject = "New Message From Website – ($subject)";
    $mail->Body = "
        <h2>New Website Message</h2>
        <p><strong>Name:</strong> {$name}</p>
        <p><strong>Email:</strong> {$email}</p>
        <p><strong>Subject:</strong> {$subject}</p>
        <p><strong>Message:</strong><br>{$message}</p>
    ";

    $mail->send();

    echo json_encode([
        "status" => "success",
        "message" => "Message sent successfully"
    ]);
} catch (Exception $e) {
    echo json_encode([
        "status" => "error",
        "message" => $mail->ErrorInfo
    ]);
}
?>
