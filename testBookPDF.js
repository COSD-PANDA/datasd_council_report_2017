require('shelljs/global');

rm('-rf', 'test.pdf');
rm('-rf', '_book/');
exec('gitbook pdf . test.pdf');
exec('open test.pdf');
