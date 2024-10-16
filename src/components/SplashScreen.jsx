const SplashScreen = () => {
  return (
    <div className="fixed inset-0 z-50 bg-card flex items-center justify-center">
      <div className="wrapper flex items-center gap-2">
        <img src="/images/logo.png" alt="VinsuMaxPress" className="sm:h-12 h-10 w-auto" />
        <span className="sm:text-5xl text-4xl font-bold">VINSUM</span>
      </div>
    </div>
  );
};

export default SplashScreen;
