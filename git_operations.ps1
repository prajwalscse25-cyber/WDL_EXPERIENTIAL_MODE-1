
cd "c:\Users\Lenovo\OneDrive\Desktop\p report"
Write-Host "=== Current Directory ===" -ForegroundColor Cyan
Get-Location
Write-Host "`n=== Configuring Git User ===" -ForegroundColor Cyan
git config --global user.name "Build User"
git config --global user.email "build@example.com"
Write-Host "Git config set`n"

Write-Host "=== Initializing Git Repository ===" -ForegroundColor Cyan
git init
Write-Host ""

Write-Host "=== Checking Git Status ===" -ForegroundColor Cyan
git status
Write-Host ""

Write-Host "=== Adding All Files ===" -ForegroundColor Cyan
git add .
Write-Host ""

Write-Host "=== Checking Status After Add ===" -ForegroundColor Cyan
git status
Write-Host ""

Write-Host "=== Committing Changes ===" -ForegroundColor Cyan
git commit -m "Update index.html with complete TechFront 2024 conference website with API integration"
Write-Host ""

Write-Host "=== Checking Remote ===" -ForegroundColor Cyan
git remote -v
Write-Host ""

Write-Host "=== Adding Remote Origin ===" -ForegroundColor Cyan
if (-not (git remote get-url origin 2>$null)) {
    git remote add origin https://github.com/prajwalscse25-cyber/WDL_EXPERIENTIAL_MODE-1.git
} else {
    Write-Host "Remote origin already exists"
}
Write-Host ""

Write-Host "=== Remote Configuration ===" -ForegroundColor Cyan
git remote -v
Write-Host ""

Write-Host "=== Pushing to Main Branch ===" -ForegroundColor Cyan
git push -u origin main
