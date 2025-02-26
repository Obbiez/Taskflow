<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>TaskFlow | Sign Up</title>
    <link rel="stylesheet" href="sign-up.css">
</head>
<body>
    <header>
        <div class="header">
            <h1> Taskflow </h1>
            <h3> Stay Organized. Stay Ahead. </h3>
            <button id="lists"> Manage Lists </button>
            <button id="schedules"> Manage Schedule </button>
            <button id="log-out"> Log Out </button>
        </div>
        <div>
            <button id="theme-switch">
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Light Mode Icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/><line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/><line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/></svg>
                <svg xmlns="http://www.w3.org/2000/svg" aria-label="Dark Mode Icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 12.79A9 9 0 1111.21 3 7 7 0 0021 12.79z"/></svg>
            </button>
        </div>
    </header>
    <main>
        <div>
        </div>
        <div class="container">
            <h1> Sign up!</h1>
            <form class="forms">
              <div class="username-container">
                <label for="Username" class="form-label">Username:</label>
                <input type="text" class="form-control" name="Username" id="Username" placeholder="Username" minlength="3" maxlength="16" required>
              </div>
                <label for="Password" class="form-label">Password:</label>
                <input type="password" class="form-control" name="Password" id="Password" placeholder="Password" minlength="8" pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{8,}" required/>
                <label for="remember-me" class="checkbox">Remember Me:</label>
                <input type="checkbox" class="remember-me" id="remember-me" name="remember-me">
                <input type="submit" class="submit" value="Submit">
                <h6></h6>
              </div>
              <!-- Password must contain at least one number, one lowercase and one uppercase letter, and at least 8 or more characters -->
            </form>
        </div>
    </main>
    <div class="spacer"></div>
    <script type="text/javascript" src="lightmode.js" defer></script>
    <script type="text/javascript" src="redirect.js" defer></script>
</body>
</html>