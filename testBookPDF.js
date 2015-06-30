require('shelljs/global');

rm('-rf', 'test.pdf');
rm('-rf', '_book/');
exec('gitbook pdf . test.pdf --gitbook=2.1.0-mrm');
exec('open test.pdf');
