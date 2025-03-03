function SwitchColors() 
{
    const Colors = document.getElementById('Colors');
    if (Colors.style.background == 'linear-gradient(45deg, blue, white, green, red, blue, purple, pink)')
    {
        Colors.style.background = 'linear-gradient(-45deg, blue, white, green, red, blue, purple pink)';
    }
}