<!doctype html>
<html>
<head>
@include('layout.header')
 </head>
<body>
@include('layout.topmenu')
<div class="container">
<div class="content">
@yield('content')
</div>
</div>
@include('layout.scripts')
</body>
</html>