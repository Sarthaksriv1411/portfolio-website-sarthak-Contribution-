# PowerShell script to create thumbnails from full-size images
# Resize images to 600x400 (3:2 ratio) for thumbnails

Add-Type -AssemblyName System.Drawing

$sourcePath = ".\public\projects\images"
$thumbnailPath = ".\public\projects\thumbnail"
$longPath = ".\public\projects\long"

# Create directories if they don't exist
if (-not (Test-Path $thumbnailPath)) { New-Item -ItemType Directory -Path $thumbnailPath }
if (-not (Test-Path $longPath)) { New-Item -ItemType Directory -Path $longPath }

# Function to resize image
function Resize-Image {
    param(
        [string]$InputPath,
        [string]$OutputPath,
        [int]$Width,
        [int]$Height
    )
    
    $img = [System.Drawing.Image]::FromFile($InputPath)
    $thumbnail = New-Object System.Drawing.Bitmap($Width, $Height)
    $graphics = [System.Drawing.Graphics]::FromImage($thumbnail)
    $graphics.InterpolationMode = [System.Drawing.Drawing2D.InterpolationMode]::HighQualityBicubic
    $graphics.DrawImage($img, 0, 0, $Width, $Height)
    
    # Save as JPEG for smaller file size
    $outputFile = [System.IO.Path]::ChangeExtension($OutputPath, ".jpg")
    $thumbnail.Save($outputFile, [System.Drawing.Imaging.ImageFormat]::Jpeg)
    
    $graphics.Dispose()
    $thumbnail.Dispose()
    $img.Dispose()
    
    Write-Host "Created: $outputFile"
}

# Get the first image from each project
$projectImages = @{
    "pipeline" = "pipeline-home.png"
    "campus" = "epikcart-1.png"
    "email" = "resume-roaster-1.png"
    "sweet" = "property-pro-1.png"
    "hospital" = "consulting-finance-1.png"
    "voice" = "mti-electronics-1.webp"
}

foreach ($project in $projectImages.Keys) {
    $sourceImage = Join-Path $sourcePath $projectImages[$project]
    
    if (Test-Path $sourceImage) {
        # Create thumbnail (600x400)
        $thumbnailOutput = Join-Path $thumbnailPath "$project-thumbnail.jpg"
        Resize-Image -InputPath $sourceImage -OutputPath $thumbnailOutput -Width 600 -Height 400
        
        # Create long thumbnail (1200x400)
        $longOutput = Join-Path $longPath "$project-long.jpg"
        Resize-Image -InputPath $sourceImage -OutputPath $longOutput -Width 1200 -Height 400
    }
}

Write-Host "`nThumbnails created successfully!" -ForegroundColor Green
Write-Host "Thumbnail size: 600x400" -ForegroundColor Cyan
Write-Host "Long thumbnail size: 1200x400" -ForegroundColor Cyan
