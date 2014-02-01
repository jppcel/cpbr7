<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="initial-scale=1, maximum-scale=1, width=device-width, user-scalable=no" />
  <title>Como está o seu dia? - CPBR7</title>
  <!-- Building blocks -->
  <!-- <link rel="stylesheet" href="style/action_menu.css"> -->
  <link rel="stylesheet" href="style/buttons.css">
  <!-- <link rel="stylesheet" href="style/confirm.css">
  <link rel="stylesheet" href="style/edit_mode.css"> -->
  <link rel="stylesheet" href="style/headers.css">
  <!-- <link rel="stylesheet" href="style/input_areas.css">
  <link rel="stylesheet" href="style/status.css">
  <link rel="stylesheet" href="style/switches.css">
  <link rel="stylesheet" href="style_unstable/drawer.css">
  <link rel="stylesheet" href="style_unstable/lists.css">
  <link rel="stylesheet" href="style_unstable/progress_activity.css">
  <link rel="stylesheet" href="style_unstable/seekbars.css">
  <link rel="stylesheet" href="style_unstable/tabs.css">
  <link rel="stylesheet" href="style_unstable/toolbars.css"> -->

  <!-- Icons -->
  <!-- <link rel="stylesheet" href="icons/styles/action_icons.css">
  <link rel="stylesheet" href="icons/styles/media_icons.css">
  <link rel="stylesheet" href="icons/styles/comms_icons.css">
  <link rel="stylesheet" href="icons/styles/settings_icons.css"> -->

  <!-- Transitions -->
  <!-- <link rel="stylesheet" href="transitions.css">
   -->
  <!-- Util CSS: some extra tricks -->
  <link rel="stylesheet" href="util.css">
  <link rel="stylesheet" href="fonts.css">

  <!-- Additional markup to make Building Blocks kind of cross browser -->
  <link rel="stylesheet" href="cross_browser.css">

  <link rel="apple-touch-icon" href="images/ico-ffOS-128x128.png"/>
  <link rel="apple-touch-icon-precomposed" href="icon" />
  
  <link rel="stylesheet" href="style/dcamobile.css">
  <style type="text/css">
  p span.valor, p span.unidade-medida  {
    height: 85px;
    line-height: 85px;    
    vertical-align: top;
    font-size: 2.5em;
    padding: 0;
  }
  p span.unidade-medida {
    font-size: 1em;
  }
  </style>
</head>
<body>
  <section id="index" data-position="current">

    <section id="drawer" role="region">
      <header class="fixed">
        <a href="../index.html"><h1>CPBR7 <em>Como está o seu dia?</em></h1></a>
      </header>

      <article class="content scrollable header">

        <p>
          Deseja comprar a camiseta abaixo?
        </p>
        <p>
          
          <form id="checkout" action="checkout.php" method="post">
            <span>Total</span><span>R$ 30.00</span><br />
            <img id="ec-button" src="https://www.paypal.com/pt_BR/i/btn/btn_xpressCheckout.gif" onclick="checkout.submit();" />
          </form>
        </p>

        <p id="telefonicalogo">
          <img src="images/telefonica-vivo-logo.png" alt="Telefônica | VIVO" height="30"/>
        </p>

      </article>
    </section> <!-- end drawer -->
  </section> <!-- end index -->

  <!-- <script type="text/javascript" defer src="js/status.js"></script>
  <script type="text/javascript" defer src="js/seekbars.js"></script> -->
  <script type="text/javascript" defer src="js/jquery.min.js"></script>
  <!-- <script type="text/javascript" defer src="js/raphael-min.js"></script>
  <script type="text/javascript" defer src="js/morris.min.js"></script>  -->
  <script type="text/javascript" defer src="js/lib/prettify.js"></script>
  <!-- <script type="text/javascript" defer src="js/lib/example.js"></script>   
  <script type="text/javascript" defer src="js/script.js"></script>-->

</body>
</html>

